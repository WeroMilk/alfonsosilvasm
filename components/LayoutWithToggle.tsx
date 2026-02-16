"use client";

import { LanguageToggle } from "./LanguageToggle";

export function LayoutWithToggle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageToggle />
      {children}
    </>
  );
}
