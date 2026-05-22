// src/components/LanguageProvider.tsx
'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Locale, getTranslation } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = useCallback(
    (key: string) => getTranslation(locale, key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback if used outside provider
    return {
      locale: 'en',
      setLocale: () => {},
      t: (key: string) => getTranslation('en', key),
    };
  }
  return ctx;
}
