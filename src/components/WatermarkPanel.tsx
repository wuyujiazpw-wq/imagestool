// src/components/WatermarkPanel.tsx
'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ImagePlus, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useT } from './LanguageProvider';

interface WatermarkPanelProps {
  watermarkPublicId: string | null;
  onWatermarkUpload: (publicId: string) => void;
  onWatermarkRemove: () => void;
  opacity: number[];
  onOpacityChange: (v: number[]) => void;
  position: string;
  onPositionChange: (p: string) => void;
}

export default function WatermarkPanel({
  watermarkPublicId, onWatermarkUpload, onWatermarkRemove,
  opacity, onOpacityChange, position, onPositionChange,
}: WatermarkPanelProps) {
  const { t } = useT();
  const positions = [
    { key: 'bottomRight', value: 'south_east' },
    { key: 'bottomLeft', value: 'south_west' },
    { key: 'topRight', value: 'north_east' },
    { key: 'topLeft', value: 'north_west' },
    { key: 'center', value: 'center' },
  ];

  return (
    <div className="space-y-3">
      <Label>{t('watermark.label')}</Label>
      {!watermarkPublicId ? (
        <CldUploadWidget
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
          onSuccess={(result: any) => {
            if (result?.info?.public_id) onWatermarkUpload(result.info.public_id);
          }}
          options={{ maxFiles: 1, multiple: false, resourceType: 'image' }}
        >
          {({ open }) => (
            <Button variant="outline" onClick={() => open()} className="w-full">
              <ImagePlus className="h-4 w-4 mr-2" />
              {t('watermark.upload')}
            </Button>
          )}
        </CldUploadWidget>
      ) : (
        <div className="space-y-3 border rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{t('watermark.uploaded')}</span>
            <Button variant="ghost" size="sm" onClick={onWatermarkRemove}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">{t('watermark.opacity')}</Label>
            <div className="flex items-center gap-3">
              <Slider value={opacity} onValueChange={(v) => onOpacityChange(Array.isArray(v) ? v : [v])} min={1} max={100} step={1} />
              <span className="text-sm font-mono w-10">{opacity[0]}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">{t('watermark.position')}</Label>
            <Select value={position} onValueChange={(v) => v && onPositionChange(v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {positions.map((p) => (
                  <SelectItem key={p.value} value={p.value}>{t(`watermark.${p.key}`)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
}
