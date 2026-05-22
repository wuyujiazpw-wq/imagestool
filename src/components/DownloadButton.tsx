// src/components/DownloadButton.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useT } from './LanguageProvider';

interface DownloadButtonProps {
  url: string | null;
  filename?: string;
  onBeforeDownload?: () => void;
}

export default function DownloadButton({ url, filename = 'processed-image', onBeforeDownload }: DownloadButtonProps) {
  const { t } = useT();

  if (!url) return null;

  return (
    <Button
      className="w-full"
      size="lg"
      onClick={() => {
        onBeforeDownload?.();
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
    >
      <Download className="h-5 w-5 mr-2" />
      {t('download.button')}
    </Button>
  );
}
