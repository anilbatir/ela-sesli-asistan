"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const { content, language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="font-heading text-2xl text-navy lowercase">
          {content.brand}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            aria-label="Dili değiştir"
            className="text-muted-foreground"
          >
            {content.languageToggleLabel}
          </Button>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#sektorler">{content.demoCta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
