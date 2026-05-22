// src/components/Footer.tsx
'use client';

import { useT } from './LanguageProvider';

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>{'\u00A9'} {new Date().getFullYear()} aiimagestool. {t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
