"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VoiceWaveProps {
  className?: string;
  barCount?: number;
  height?: number;
}

const PEAKS = [0.45, 0.85, 1, 0.7, 0.5];

export default function VoiceWave({ className, barCount = 5, height = 56 }: VoiceWaveProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-1.5", className)}
      style={{ height }}
    >
      {Array.from({ length: barCount }).map((_, index) => {
        const peak = PEAKS[index % PEAKS.length];
        return (
          <motion.span
            key={index}
            className="w-1.5 rounded-full bg-gradient-to-t from-indigo-600 to-cyan-500"
            animate={{
              height: [height * 0.25, height * peak, height * 0.35, height * peak * 0.8, height * 0.25],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        );
      })}
    </div>
  );
}
