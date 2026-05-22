// src/components/ImageUploader.tsx
'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { CloudUpload } from 'lucide-react';
import { useT } from './LanguageProvider';

interface ImageUploaderProps {
  onUpload: (publicId: string, originalUrl: string) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const { t } = useT();

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
      onSuccess={(result: any) => {
        if (result?.info?.public_id) {
          const publicId = result.info.public_id;
          const url = result.info.secure_url;
          onUpload(publicId, url);
        }
      }}
      onError={() => {
        alert(t('upload.error'));
      }}
      options={{
        maxFiles: 1,
        multiple: false,
        resourceType: 'image',
        clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'],
        maxFileSize: 10 * 1024 * 1024,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open()}
          className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-12 text-center cursor-pointer hover:border-primary/50 transition-colors"
        >
          <CloudUpload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-1">{t('upload.hint')}</p>
          <p className="text-sm text-muted-foreground">{t('upload.limit')}</p>
        </div>
      )}
    </CldUploadWidget>
  );
}
