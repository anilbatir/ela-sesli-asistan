"use client";

import { cn } from "@/lib/utils";

interface AIOrbProps {
  className?: string;
}

export default function AIOrb({ className }: AIOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "ai-orb bg-gradient-to-br from-blue-400/50 via-violet-400/40 to-pink-400/50 backdrop-blur-2xl",
        "shadow-[0_0_90px_rgba(96,165,250,0.45)]",
        className
      )}
    />
  );
}
