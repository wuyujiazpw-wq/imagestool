// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useT } from './LanguageProvider';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useT();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          ImageTool
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t('header.home')}
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {t('header.privacy')}
            </Link>
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
