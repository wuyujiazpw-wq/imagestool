// src/app/page.tsx
'use client';

import ImageEditor from '@/components/ImageEditor';
import AdBanner from '@/components/AdBanner';
import { useT } from '@/components/LanguageProvider';

export default function Home() {
  const { t } = useT();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('home.title')}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('home.subtitle')}
        </p>
      </div>

      <AdBanner slot="1234567892" format="horizontal" />

      <ImageEditor />
    </div>
  );
}
