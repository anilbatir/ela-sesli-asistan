"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const { content, language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-white/50 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="font-heading text-2xl lowercase">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            {content.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-sm text-muted-foreground md:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            aria-label="Dili değiştir"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {content.languageToggleLabel}
          </button>

          <motion.a
            href="#sektorler"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            variants={{ hover: { scale: 1.05 } }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative isolate inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
            {content.demoCta}
            <motion.span
              variants={{ hover: { x: 5 } }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
