"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
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

export default function ContactForm() {
  const { content } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sector, setSector] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="mx-auto max-w-2xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <Card className="rounded-3xl border border-white/50 bg-white/70 p-2 shadow-sm backdrop-blur-md transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10">
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

              <motion.button
                type="submit"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                variants={{ hover: { scale: 1.03 } }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group relative isolate mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-500/25"
              >
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
                {content.form.submit}
                <motion.span
                  variants={{ hover: { x: 5 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.button>
            </form>
          )}
        </CardContent>
      </Card>
      </motion.div>
    </section>
  );
}
