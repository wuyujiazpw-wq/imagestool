// src/components/DownloadButton.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useT } from './LanguageProvider';

interface DownloadButtonProps {
  url: string | null;
  filename?: string;
  onBeforeDownload?: () => void;
}

export default function DownloadButton({ url, filename = 'processed-image', onBeforeDownload }: DownloadButtonProps) {
  const { t } = useT();
  const [downloading, setDownloading] = useState(false);

  if (!url) return null;

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    onBeforeDownload?.();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const ext = blob.type.split('/')[1] || 'png';
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${filename}.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // fallback: open in new tab
      window.open(url, '_blank');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Button
      className="w-full"
      size="lg"
      disabled={downloading}
      onClick={handleDownload}
    >
      {downloading ? (
        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
      ) : (
        <Download className="h-5 w-5 mr-2" />
      )}
      {downloading ? t('download.processing') : t('download.button')}
    </Button>
  );
}
