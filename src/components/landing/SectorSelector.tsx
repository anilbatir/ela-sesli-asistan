"use client";

import {
  Building2,
  Home,
  Scale,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { SECTORS } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

const SECTOR_ICONS: Record<string, LucideIcon> = {
  hotel: Building2,
  restaurant: UtensilsCrossed,
  clinic: Stethoscope,
  salon: Scissors,
  law: Scale,
  realestate: Home,
};

export default function SectorSelector() {
  const { content } = useLanguage();
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailableSector, setUnavailableSector] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSelect = (sectorId: string, audioUrl: string) => {
    setUnavailableSector(null);

    if (activeSector === sectorId && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }

    setActiveSector(sectorId);

    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => {
        setIsPlaying(false);
        setUnavailableSector(sectorId);
      };
    }

    audioRef.current.src = audioUrl;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        setUnavailableSector(sectorId);
      });
  };

  return (
    <section id="sektorler" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="mb-12 text-center">
        <h2 className="font-heading text-3xl text-navy sm:text-4xl">
          {content.sectorSection.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{content.sectorSection.subtitle}</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SECTORS.map((sector, index) => {
          const Icon = SECTOR_ICONS[sector.id];
          const isActive = activeSector === sector.id;
          const isActivePlaying = isActive && isPlaying;

          return (
            <Reveal key={sector.id} delay={index * 70}>
              <Card
                role="button"
                tabIndex={0}
                onClick={() => handleSelect(sector.id, sector.audioUrl)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleSelect(sector.id, sector.audioUrl);
                  }
                }}
                className={cn(
                  "laser-border cursor-pointer border border-white/60 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl",
                  isActive && "ring-1 ring-primary/30"
                )}
              >
                <CardContent className="flex flex-col items-center gap-3 text-center">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300",
                      isActive ? "bg-primary/15" : "bg-accent"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6 transition-transform duration-300 group-hover/card:animate-wiggle",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                      strokeWidth={1.75}
                    />
                  </span>
                  <span className="text-sm font-medium text-navy">
                    {content.sectors[sector.id]}
                  </span>

                  <span className="flex h-4 items-end gap-0.5">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className={cn(
                          "w-0.5 rounded-full bg-seagreen-pale transition-all",
                          isActivePlaying ? "animate-wave" : "h-1.5"
                        )}
                        style={isActivePlaying ? { animationDelay: `${bar * 0.12}s` } : undefined}
                      />
                    ))}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {isActivePlaying
                      ? content.sectorPlayer.playingLabel
                      : content.sectorPlayer.playLabel}
                  </span>

                  {unavailableSector === sector.id && (
                    <span className="text-xs text-primary">{content.sectorPlayer.comingSoon}</span>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
