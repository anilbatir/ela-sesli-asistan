"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const CHAR_INTERVAL_MS = 28;
const HOLD_AFTER_MESSAGE_MS = 1300;
const LOOP_PAUSE_MS = 2200;

interface ChatMockupProps {
  className?: string;
}

export default function ChatMockup({ className }: ChatMockupProps) {
  const { content, language } = useLanguage();

  return (
    <ChatMockupInner
      key={language}
      businessName={content.chatDemo.businessName}
      messages={content.chatDemo.messages}
      className={className}
    />
  );
}

function ChatMockupInner({
  businessName,
  messages,
  className,
}: {
  businessName: string;
  messages: { sender: "assistant" | "customer"; text: string }[];
  className?: string;
}) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount(0);
        setTypedLength(0);
      }, LOOP_PAUSE_MS);
      return () => clearTimeout(timer);
    }

    const current = messages[visibleCount];
    if (typedLength < current.text.length) {
      const timer = setTimeout(() => setTypedLength((l) => l + 1), CHAR_INTERVAL_MS);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
      setTypedLength(0);
    }, HOLD_AFTER_MESSAGE_MS);
    return () => clearTimeout(timer);
  }, [visibleCount, typedLength, messages]);

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-3xl border border-white/50 bg-white/70 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/5 px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs font-medium text-neutral-500">{businessName}</span>
      </div>

      <div className="flex min-h-[220px] flex-col justify-end gap-3 px-5 py-6">
        {messages.slice(0, visibleCount).map((message, index) => (
          <ChatBubble key={index} sender={message.sender} typed={message.text} />
        ))}
        {visibleCount < messages.length && typedLength > 0 && (
          <ChatBubble
            sender={messages[visibleCount].sender}
            typed={messages[visibleCount].text.slice(0, typedLength)}
            isTyping={typedLength < messages[visibleCount].text.length}
          />
        )}
      </div>
    </div>
  );
}

function ChatBubble({
  sender,
  typed,
  isTyping,
}: {
  sender: "assistant" | "customer";
  typed: string;
  isTyping?: boolean;
}) {
  const isAssistant = sender === "assistant";

  return (
    <div className={cn("flex items-end gap-2", isAssistant ? "justify-start" : "justify-end")}>
      {isAssistant && (
        <span className="mb-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-[10px] font-semibold text-white">
          E
        </span>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-snug",
          isAssistant
            ? "rounded-bl-sm bg-gradient-to-r from-indigo-600 to-indigo-500 text-white"
            : "rounded-br-sm bg-slate-100 text-slate-700"
        )}
      >
        <span>{typed}</span>
        {isAssistant && isTyping && (
          <span className="ml-2 inline-flex h-3 items-end gap-0.5 align-middle">
            {[0, 1, 2, 3].map((bar) => (
              <span
                key={bar}
                className="w-0.5 rounded-full bg-white/80 animate-wave"
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
