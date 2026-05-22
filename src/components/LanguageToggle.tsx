// src/components/LanguageToggle.tsx
'use client';

import { useT } from './LanguageProvider';

export default function LanguageToggle() {
  const { locale, setLocale } = useT();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
      className="px-3 py-1 text-sm border rounded-md hover:bg-accent transition-colors"
      title={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
