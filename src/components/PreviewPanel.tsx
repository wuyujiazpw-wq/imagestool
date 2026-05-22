// src/components/PreviewPanel.tsx
'use client';

import Image from 'next/image';
import { useT } from './LanguageProvider';

interface PreviewPanelProps {
  previewUrl: string | null;
  originalUrl: string | null;
  isLoading: boolean;
  onLoad?: () => void;
}

export default function PreviewPanel({ previewUrl, originalUrl, isLoading, onLoad }: PreviewPanelProps) {
  const { t } = useT();

  return (
    <div className="space-y-3">
      <h3 className="font-medium">{t('preview.label')}</h3>
      <div className="border rounded-xl overflow-hidden bg-muted/30 min-h-[300px] flex items-center justify-center">
        {isLoading ? (
          <p className="text-muted-foreground animate-pulse">{t('preview.processing')}</p>
        ) : previewUrl ? (
          <div className="relative w-full max-w-full">
            <Image
              key={previewUrl}
              src={previewUrl}
              alt="Processed result"
              width={800}
              height={600}
              className="max-h-[500px] w-auto mx-auto object-contain"
              unoptimized
              onLoad={onLoad}
            />
          </div>
        ) : originalUrl ? (
          <Image
            src={originalUrl}
            alt="Original image"
            width={800}
            height={600}
            className="max-h-[500px] w-auto mx-auto object-contain"
            unoptimized
          />
        ) : (
          <p className="text-muted-foreground">{t('preview.empty')}</p>
        )}
      </div>
    </div>
  );
}
