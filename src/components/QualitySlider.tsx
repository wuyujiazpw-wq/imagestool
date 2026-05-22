// src/components/QualitySlider.tsx
'use client';

import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useT } from './LanguageProvider';

interface QualitySliderProps {
  value: number[];
  onChange: (v: number[]) => void;
  autoQuality: boolean;
  onAutoToggle: (v: boolean) => void;
}

export default function QualitySlider({ value, onChange, autoQuality, onAutoToggle }: QualitySliderProps) {
  const { t } = useT();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{t('quality.label')}</Label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={autoQuality}
            onChange={(e) => onAutoToggle(e.target.checked)}
          />
          {t('quality.auto')}
        </label>
      </div>
      {!autoQuality && (
        <div className="flex items-center gap-3">
          <Slider
            value={value}
            onValueChange={(v) => onChange(Array.isArray(v) ? v : [v])}
            min={1}
            max={100}
            step={1}
          />
          <span className="text-sm font-mono w-10 text-right">{value[0]}%</span>
        </div>
      )}
    </div>
  );
}
