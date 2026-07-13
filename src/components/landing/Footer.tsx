"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span className="font-heading text-lg text-navy lowercase">{content.brand}</span>
        <span>{content.footer.tagline}</span>
        <span>
          © {new Date().getFullYear()} Ela. {content.footer.rights}
        </span>
      </div>
    </footer>
  );
}
