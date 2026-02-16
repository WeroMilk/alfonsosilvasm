"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Locale } from "@/lib/translations";

const STORAGE_KEY = "portafolio-lang";

type LanguageContextValue = {
  lang: Locale;
  setLang: (next: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "es" || stored === "en") setLangState(stored);
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    if (typeof document !== "undefined") document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
  }, [mounted, lang]);

  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : "es", setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
