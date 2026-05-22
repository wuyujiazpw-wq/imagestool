// src/components/PreviewPanel.tsx
'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useT } from './LanguageProvider';

interface PreviewPanelProps {
  previewUrl: string | null;
  originalUrl: string | null;
}

export default function PreviewPanel({ previewUrl, originalUrl }: PreviewPanelProps) {
  const { t } = useT();
  const [loading, setLoading] = useState(false);
  const prevUrlRef = useRef(previewUrl);

  if (previewUrl !== prevUrlRef.current) {
    prevUrlRef.current = previewUrl;
    if (previewUrl) {
      setLoading(true);
    }
  }

  return (
    <div className="space-y-3">
      <h3 className="font-medium">{t('preview.label')}</h3>
      <div className="border rounded-xl overflow-hidden bg-muted/30 min-h-[300px] flex items-center justify-center relative">
        {loading && previewUrl && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/30 rounded-xl">
            <p className="text-muted-foreground animate-pulse">{t('preview.processing')}</p>
          </div>
        )}
        {previewUrl ? (
          <div className={`relative w-full max-w-full ${loading ? 'opacity-50' : ''}`}>
            <Image
              key={previewUrl}
              src={previewUrl}
              alt="Processed result"
              width={800}
              height={600}
              className="max-h-[500px] w-auto mx-auto object-contain"
              unoptimized
              onLoad={() => setLoading(false)}
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
