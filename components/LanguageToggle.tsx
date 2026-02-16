"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle-wrap" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        className={`lang-btn ${lang === "es" ? "lang-btn-active" : ""}`}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        aria-label="Español"
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-btn ${lang === "en" ? "lang-btn-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
