"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import ChatMockup from "./ChatMockup";
import VoiceWave from "./VoiceWave";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pt-24 pb-20 text-center sm:pt-32">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-balance font-heading text-5xl font-medium leading-[1.05] sm:text-7xl md:text-8xl"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
          {content.hero.brandTitle}
        </span>
        <span className="mt-3 block text-3xl text-navy sm:text-5xl md:text-6xl">
          {content.hero.title}
        </span>
      </motion.h1>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <VoiceWave />
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        className="max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
      >
        {content.hero.subtitle}
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
        className="relative"
      >
        <motion.a
          href="#sektorler"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          variants={{ hover: { scale: 1.06 } }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group relative isolate inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-9 py-4 text-base font-medium text-white shadow-lg shadow-indigo-500/25"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
          {content.hero.cta}
          <motion.span variants={{ hover: { x: 5 } }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <ArrowRight className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="mt-14 flex w-full items-center justify-center"
      >
        <ChatMockup />
      </motion.div>
    </section>
  );
}
