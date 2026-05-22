'use client';

import Image from 'next/image';

interface PreviewPanelProps {
  previewUrl: string | null;
  originalUrl: string | null;
  isLoading: boolean;
}

export default function PreviewPanel({ previewUrl, originalUrl, isLoading }: PreviewPanelProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">Preview</h3>
      <div className="border rounded-xl overflow-hidden bg-muted/30 min-h-[300px] flex items-center justify-center">
        {isLoading ? (
          <p className="text-muted-foreground animate-pulse">Processing...</p>
        ) : previewUrl ? (
          <div className="relative w-full max-w-full">
            <Image
              src={previewUrl}
              alt="Processed result"
              width={800}
              height={600}
              className="max-h-[500px] w-auto mx-auto object-contain"
              unoptimized
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
          <p className="text-muted-foreground">Upload an image to start</p>
        )}
      </div>
    </div>
  );
}
