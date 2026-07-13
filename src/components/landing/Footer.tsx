"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="mt-auto border-t border-white/50 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <span className="font-heading text-lg lowercase">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            {content.brand}
          </span>
        </span>
        <span>{content.footer.tagline}</span>
        <span>
          © {new Date().getFullYear()} Ela. {content.footer.rights}
        </span>
      </div>
    </footer>
  );
}
