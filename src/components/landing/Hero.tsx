"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import AIOrb from "./AIOrb";
import ChatMockup from "./ChatMockup";
import Reveal from "./Reveal";

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pt-20 pb-16 text-center">
      <Reveal>
        <h1 className="text-balance bg-gradient-to-r from-neutral-900 via-neutral-700 to-blue-600 bg-clip-text font-heading text-4xl font-medium leading-tight text-transparent sm:text-5xl md:text-6xl">
          {content.hero.title}
        </h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          {content.hero.subtitle}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <Button asChild size="lg" className="mt-2 h-11 rounded-full px-8 text-base">
          <a href="#sektorler">{content.hero.cta}</a>
        </Button>
      </Reveal>

      <Reveal delay={280} className="relative mt-10 flex w-full items-center justify-center">
        <AIOrb className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-80 blur-md sm:h-80 sm:w-80" />
        <ChatMockup className="relative z-10" />
      </Reveal>
    </section>
  );
}
