"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language-context";
import { SECTORS } from "@/lib/site-content";
import Reveal from "./Reveal";

export default function ContactForm() {
  const { content } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sector, setSector] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="mx-auto max-w-2xl px-6 py-20">
      <Reveal>
      <Card className="border border-white/60 bg-white/80 shadow-sm backdrop-blur-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-heading text-3xl text-navy">{content.form.title}</CardTitle>
          <CardDescription className="text-base">{content.form.subtitle}</CardDescription>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <p className="rounded-lg bg-accent px-4 py-4 text-center text-muted-foreground">
              {content.form.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="businessName">{content.form.businessName}</Label>
                <Input
                  id="businessName"
                  required
                  type="text"
                  placeholder={content.form.businessNamePlaceholder}
                  className="h-10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="sector">{content.form.sectorLabel}</Label>
                <Select value={sector} onValueChange={setSector} required>
                  <SelectTrigger id="sector" className="h-10 w-full">
                    <SelectValue placeholder={content.form.sectorPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTORS.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        {content.sectors[s.id]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="phone">{content.form.phone}</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder={content.form.phonePlaceholder}
                    className="h-10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">{content.form.email}</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder={content.form.emailPlaceholder}
                    className="h-10"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-2 h-11 rounded-full text-base">
                {content.form.submit}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
      </Reveal>
    </section>
  );
}
