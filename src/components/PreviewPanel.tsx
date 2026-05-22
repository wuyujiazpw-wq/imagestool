// src/components/PreviewPanel.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useT } from './LanguageProvider';

interface PreviewPanelProps {
  previewUrl: string | null;
  originalUrl: string | null;
}

export default function PreviewPanel({ previewUrl, originalUrl }: PreviewPanelProps) {
  const { t } = useT();
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const src = previewUrl || originalUrl;

  useEffect(() => {
    if (!src) {
      setLoaded(false);
      return;
    }
    setLoaded(false);
    const img = new window.Image();
    imgRef.current = img;
    img.onload = () => {
      if (imgRef.current === img) {
        setLoaded(true);
      }
    };
    img.onerror = () => {
      if (imgRef.current === img) {
        setLoaded(true);
      }
    };
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
      if (imgRef.current === img) {
        imgRef.current = null;
      }
    };
  }, [src]);

  return (
    <div className="space-y-3">
      <h3 className="font-medium">{t('preview.label')}</h3>
      <div className="border rounded-xl overflow-hidden bg-muted/30 min-h-[300px] flex items-center justify-center relative">
        {!loaded && src && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/30 rounded-xl">
            <p className="text-muted-foreground animate-pulse">{t('preview.processing')}</p>
          </div>
        )}
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="Preview"
            style={{ maxHeight: '500px', width: 'auto', maxWidth: '100%', opacity: loaded ? 1 : 0.4 }}
            className="object-contain mx-auto"
          />
        ) : (
          <p className="text-muted-foreground">{t('preview.empty')}</p>
        )}
      </div>
    </div>
  );
}
