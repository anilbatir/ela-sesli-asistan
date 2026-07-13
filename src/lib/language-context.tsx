"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Language, type LocalizedContent, SITE_CONTENT } from "@/lib/site-content";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  content: LocalizedContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, content: SITE_CONTENT[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
