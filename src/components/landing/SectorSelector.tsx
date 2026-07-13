"use client";

import { motion } from "framer-motion";
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
import { useLanguage } from "@/lib/language-context";
import { SECTORS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

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
    <section id="sektorler" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="font-heading text-3xl text-navy sm:text-5xl">
          {content.sectorSection.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          {content.sectorSection.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {SECTORS.map((sector, index) => {
          const Icon = SECTOR_ICONS[sector.id];
          const isActive = activeSector === sector.id;
          const isActivePlaying = isActive && isPlaying;

          return (
            <motion.button
              key={sector.id}
              type="button"
              onClick={() => handleSelect(sector.id, sector.audioUrl)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group flex cursor-pointer flex-col items-center gap-4 rounded-3xl border bg-white/70 px-5 py-8 text-center shadow-sm backdrop-blur-md",
                "transition-[border-color,box-shadow] duration-300 ease-in-out hover:shadow-xl hover:shadow-indigo-500/10",
                isActive ? "border-indigo-300" : "border-white/50 hover:border-indigo-200"
              )}
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300",
                  isActive
                    ? "bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"
                    : "bg-gradient-to-br from-indigo-500/10 to-cyan-500/10"
                )}
              >
                <Icon
                  className={cn(
                    "h-7 w-7 transition-colors duration-300",
                    isActive ? "text-indigo-600" : "text-muted-foreground group-hover:text-indigo-600"
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
                      "w-0.5 rounded-full bg-gradient-to-t from-indigo-500 to-cyan-400 transition-all",
                      isActivePlaying ? "animate-wave" : "h-1.5 opacity-50"
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
                <span className="text-xs text-indigo-600">
                  {content.sectorPlayer.comingSoon}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
