import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY tanımlı değil. .env dosyasını kontrol edin." },
      { status: 500 }
    );
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { apiVersion: "v1alpha" },
    });

    const token = await ai.authTokens.create({
      config: {
        uses: 1,
      },
    });

    return NextResponse.json({ token: token.name });
  } catch (error) {
    console.error("Live token oluşturulamadı:", error);
    return NextResponse.json(
      { error: "Sesli asistan oturumu başlatılamadı." },
      { status: 500 }
    );
  }
}
