"use client";

import { GoogleGenAI, Modality, type LiveServerMessage, type Session } from "@google/genai";
import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LIVE_MODEL,
  SAVE_RESERVATION_FUNCTION_NAME,
  SAVE_RESERVATION_TOOL,
  SYSTEM_INSTRUCTION,
} from "@/lib/assistant";
import { cn } from "@/lib/utils";

type CallState = "idle" | "connecting" | "listening" | "error";
type TranscriptEntry = { role: "misafir" | "ela"; text: string };

const INPUT_SAMPLE_RATE = 16000;
const OUTPUT_SAMPLE_RATE = 24000;

function base64ToBytes(base64: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

export default function VoiceAssistant() {
  const [state, setState] = useState<CallState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [savedNotice, setSavedNotice] = useState(false);

  const sessionRef = useRef<Session | null>(null);
  const captureContextRef = useRef<AudioContext | null>(null);
  const playbackContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const nextPlaybackTimeRef = useRef(0);
  const inputTranscriptRef = useRef("");
  const outputTranscriptRef = useRef("");
  const transcriptRef = useRef<TranscriptEntry[]>([]);

  useEffect(() => {
    transcriptRef.current = transcript;
  }, [transcript]);

  const stopCall = useCallback(() => {
    sessionRef.current?.close();
    sessionRef.current = null;

    processorRef.current?.disconnect();
    processorRef.current = null;
    sourceRef.current?.disconnect();
    sourceRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    captureContextRef.current?.close().catch(() => {});
    captureContextRef.current = null;
    playbackContextRef.current?.close().catch(() => {});
    playbackContextRef.current = null;
    nextPlaybackTimeRef.current = 0;

    setState((current) => (current === "error" ? current : "idle"));
  }, []);

  useEffect(() => stopCall, [stopCall]);

  const playAudioChunk = useCallback((base64Data: string) => {
    const ctx = playbackContextRef.current;
    if (!ctx) return;

    const bytes = base64ToBytes(base64Data);
    const pcm16 = new Int16Array(bytes.buffer, bytes.byteOffset, bytes.length / 2);
    const float32 = new Float32Array(pcm16.length);
    for (let i = 0; i < pcm16.length; i++) float32[i] = pcm16[i] / 32768;

    const buffer = ctx.createBuffer(1, float32.length, OUTPUT_SAMPLE_RATE);
    buffer.copyToChannel(float32, 0);

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);

    const startAt = Math.max(nextPlaybackTimeRef.current, ctx.currentTime);
    source.start(startAt);
    nextPlaybackTimeRef.current = startAt + buffer.duration;
  }, []);

  const saveReservation = useCallback(async (args: Record<string, unknown>) => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...args,
          transcript: transcriptRef.current
            .map((entry) => `${entry.role === "misafir" ? "Misafir" : "Ela"}: ${entry.text}`)
            .join("\n"),
        }),
      });
      setSavedNotice(true);
    } catch (error) {
      console.error("Rezervasyon talebi kaydedilemedi:", error);
    }
  }, []);

  const handleServerMessage = useCallback(
    async (message: LiveServerMessage) => {
      const inputText = message.serverContent?.interimInputTranscription?.text;
      if (inputText) inputTranscriptRef.current += inputText;

      const outputText = message.serverContent?.outputTranscription?.text;
      if (outputText) outputTranscriptRef.current += outputText;

      const audioPart = message.serverContent?.modelTurn?.parts?.find(
        (part) => part.inlineData?.data
      );
      if (audioPart?.inlineData?.data) {
        playAudioChunk(audioPart.inlineData.data);
      }

      if (message.serverContent?.turnComplete) {
        setTranscript((prev) => {
          const next = [...prev];
          if (inputTranscriptRef.current.trim()) {
            next.push({ role: "misafir", text: inputTranscriptRef.current.trim() });
          }
          if (outputTranscriptRef.current.trim()) {
            next.push({ role: "ela", text: outputTranscriptRef.current.trim() });
          }
          return next;
        });
        inputTranscriptRef.current = "";
        outputTranscriptRef.current = "";
      }

      if (message.toolCall?.functionCalls?.length) {
        for (const call of message.toolCall.functionCalls) {
          if (call.name === SAVE_RESERVATION_FUNCTION_NAME) {
            await saveReservation(call.args ?? {});
            sessionRef.current?.sendToolResponse({
              functionResponses: [
                { id: call.id, name: call.name, response: { success: true } },
              ],
            });
          }
        }
      }
    },
    [playAudioChunk, saveReservation]
  );

  const startCall = useCallback(async () => {
    setErrorMessage(null);
    setSavedNotice(false);
    setTranscript([]);
    setState("connecting");

    try {
      const tokenRes = await fetch("/api/live-token", { method: "POST" });
      const tokenBody = await tokenRes.json();
      if (!tokenRes.ok) throw new Error(tokenBody.error ?? "Oturum başlatılamadı.");

      const ai = new GoogleGenAI({
        apiKey: tokenBody.token,
        httpOptions: { apiVersion: "v1alpha" },
      });

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const captureContext = new AudioContext({ sampleRate: INPUT_SAMPLE_RATE });
      captureContextRef.current = captureContext;
      const playbackContext = new AudioContext({ sampleRate: OUTPUT_SAMPLE_RATE });
      playbackContextRef.current = playbackContext;

      const session = await ai.live.connect({
        model: LIVE_MODEL,
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [SAVE_RESERVATION_TOOL],
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          speechConfig: { languageCode: "tr-TR" },
        },
        callbacks: {
          onopen: () => setState("listening"),
          onmessage: (message) => {
            void handleServerMessage(message);
          },
          onerror: (event) => {
            console.error("Live API hatası:", event);
            setErrorMessage("Bağlantı sırasında bir hata oluştu.");
            setState("error");
          },
          onclose: () => stopCall(),
        },
      });
      sessionRef.current = session;

      const source = captureContext.createMediaStreamSource(stream);
      sourceRef.current = source;
      const processor = captureContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (event) => {
        const input = event.inputBuffer.getChannelData(0);
        const pcm16 = new Int16Array(input.length);
        for (let i = 0; i < input.length; i++) {
          const sample = Math.max(-1, Math.min(1, input[i]));
          pcm16[i] = sample < 0 ? sample * 32768 : sample * 32767;
        }
        const base64 = bytesToBase64(new Uint8Array(pcm16.buffer));
        sessionRef.current?.sendRealtimeInput({
          audio: { data: base64, mimeType: `audio/pcm;rate=${INPUT_SAMPLE_RATE}` },
        });
      };

      source.connect(processor);
      processor.connect(captureContext.destination);
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.");
      setState("error");
      stopCall();
    }
  }, [handleServerMessage, stopCall]);

  const isActive = state === "connecting" || state === "listening";

  return (
    <Card className="w-full max-w-lg border border-border shadow-sm">
      <CardContent className="flex flex-col items-center gap-6 py-8">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span
            className="absolute inset-0 rounded-full bg-primary/25 animate-glow-pulse"
            style={{ animationDuration: isActive ? "1.3s" : "3s" }}
          />
          <span
            className="absolute inset-0 rounded-full bg-primary/15 animate-glow-pulse"
            style={{ animationDuration: isActive ? "1.3s" : "3s", animationDelay: "0.8s" }}
          />
          <button
            type="button"
            onClick={isActive ? stopCall : startCall}
            className={cn(
              "relative flex h-24 w-24 items-center justify-center rounded-full text-sm font-medium text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg",
              isActive ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
            )}
          >
            {state === "connecting" ? "Bağlanıyor…" : isActive ? "Bitir" : "Konuş"}
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          {state === "idle" && "Rezervasyon talebi için mikrofona dokunun."}
          {state === "connecting" && "Ela'ya bağlanılıyor…"}
          {state === "listening" && "Ela dinliyor, konuşabilirsiniz."}
          {state === "error" && (errorMessage ?? "Bir hata oluştu.")}
        </p>

        {savedNotice && (
          <div className="w-full rounded-lg bg-accent px-4 py-2 text-center text-sm text-navy">
            Rezervasyon talebiniz kaydedildi. Otel ekibimiz sizinle en kısa sürede iletişime geçecek.
          </div>
        )}

        {transcript.length > 0 && (
          <div className="w-full divide-y divide-border overflow-y-auto rounded-lg border border-border max-h-80">
            {transcript.map((entry, index) => (
              <div key={index} className="px-4 py-2 text-sm">
                <span className="font-medium text-navy">
                  {entry.role === "misafir" ? "Siz: " : "Ela: "}
                </span>
                <span className="text-muted-foreground">{entry.text}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
