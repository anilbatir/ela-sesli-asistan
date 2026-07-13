import { cn } from "@/lib/utils";

interface VoiceOrbProps {
  active?: boolean;
  size?: number;
  className?: string;
}

export default function VoiceOrb({ active = false, size = 14, className }: VoiceOrbProps) {
  const ringDuration = active ? "1.3s" : "2.6s";
  const coreDuration = active ? "1.2s" : "3.2s";

  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size * 3.4, height: size * 3.4 }}
    >
      <span
        className="absolute inset-0 rounded-full bg-primary/25 animate-glow-pulse"
        style={{ animationDuration: ringDuration }}
      />
      <span
        className="absolute inset-0 rounded-full bg-primary/20 animate-glow-pulse"
        style={{ animationDuration: ringDuration, animationDelay: "0.9s" }}
      />
      <span
        className="relative rounded-full bg-primary animate-breathe shadow-[0_0_24px_var(--color-coral)]"
        style={{ width: size, height: size, animationDuration: coreDuration }}
      />
    </span>
  );
}
