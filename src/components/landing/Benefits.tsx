"use client";

import { Clock, Mic, PhoneCall, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";

const ICONS: LucideIcon[] = [PhoneCall, Mic, Clock];

export default function Benefits() {
  const { content } = useLanguage();

  return (
    <section id="nasil-calisir" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-3">
        {content.benefits.map((benefit, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={benefit.title} delay={index * 90}>
              <Card className="laser-border h-full border border-white/60 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex flex-col items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Icon
                      className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover/card:animate-wiggle"
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="font-heading text-xl text-navy">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
