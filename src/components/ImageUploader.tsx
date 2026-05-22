'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { CloudUpload } from 'lucide-react';

interface ImageUploaderProps {
  onUpload: (publicId: string, originalUrl: string) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
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
      onError={(error: any) => {
        console.error('Upload failed:', error);
        alert('Upload failed. Please check your file and try again.');
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
          <p className="text-lg font-medium mb-1">Click or drag to upload an image</p>
          <p className="text-sm text-muted-foreground">
            Supports JPG, PNG, WebP, AVIF. Max 10MB.
          </p>
        </div>
      )}
    </CldUploadWidget>
  );
}
