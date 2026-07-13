"use client";

import { motion } from "framer-motion";
import { Clock, Mic, PhoneCall, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import VoiceWave from "./VoiceWave";

const ICONS: LucideIcon[] = [PhoneCall, Mic, Clock];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function BentoCard({
  children,
  className,
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group rounded-3xl border border-white/50 bg-white/70 p-8 shadow-sm backdrop-blur-md",
        "transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default function BentoGrid() {
  const { content } = useLanguage();
  const [first, second, third] = content.benefits;
  const [FirstIcon, SecondIcon, ThirdIcon] = ICONS;

  return (
    <section id="nasil-calisir" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-6">
        <BentoCard index={0} className="md:col-span-4">
          <div className="flex h-full flex-col items-start justify-between gap-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15">
              <FirstIcon className="h-6 w-6 text-indigo-600" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-heading text-2xl text-navy">{first.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                {first.description}
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard index={1} className="md:col-span-2">
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text font-heading text-6xl font-medium text-transparent">
              {content.bento.statValue}
            </span>
            <VoiceWave height={32} className="opacity-80" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {content.bento.statLabel}
            </p>
          </div>
        </BentoCard>

        <BentoCard index={2} className="md:col-span-2">
          <div className="flex h-full flex-col items-start gap-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15">
              <SecondIcon className="h-6 w-6 text-cyan-600" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-heading text-xl text-navy">{second.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {second.description}
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard index={3} className="md:col-span-4">
          <div className="flex h-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15">
              <ThirdIcon className="h-6 w-6 text-indigo-600" strokeWidth={1.75} />
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-2xl text-navy">{third.title}</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                {third.description}
              </p>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
