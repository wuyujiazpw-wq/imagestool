// src/components/ResizePanel.tsx
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useT } from './LanguageProvider';

interface ResizePanelProps {
  width: string;
  height: string;
  onWidthChange: (w: string) => void;
  onHeightChange: (h: string) => void;
  cropMode: string;
  onCropModeChange: (m: string) => void;
}

const CROP_KEYS = ['fill', 'fit', 'scale', 'pad'] as const;

export default function ResizePanel({ width, height, onWidthChange, onHeightChange, cropMode, onCropModeChange }: ResizePanelProps) {
  const { t } = useT();
  const presets = [
    { key: 'thumbnail', w: 150, h: 150 },
    { key: 'small', w: 400, h: 300 },
    { key: 'medium', w: 800, h: 600 },
    { key: 'large', w: 1920, h: 1080 },
  ];

  return (
    <div className="space-y-3">
      <Label>{t('resize.label')}</Label>
      <div className="flex gap-2 flex-wrap">
        {presets.map((p) => (
          <button
            key={p.key}
            onClick={() => { onWidthChange(String(p.w)); onHeightChange(String(p.h)); }}
            className="px-3 py-1 text-xs border rounded-md hover:bg-accent transition-colors"
          >
            {t(`resize.${p.key}`)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">{t('resize.width')}</Label>
          <Input
            type="number"
            placeholder={t('resize.auto')}
            value={width}
            onChange={(e) => onWidthChange(e.target.value)}
            min={1}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">{t('resize.height')}</Label>
          <Input
            type="number"
            placeholder={t('resize.auto')}
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            min={1}
          />
        </div>
      </div>
      {(width || height) && (
        <div className="space-y-1">
          <Label className="text-xs">{t('resize.cropMode')}</Label>
          <Select value={cropMode} onValueChange={(v) => v && onCropModeChange(v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CROP_KEYS.map((k) => (
                <SelectItem key={k} value={k}>{t(`resize.${k}`)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
