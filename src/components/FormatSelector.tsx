// src/components/FormatSelector.tsx
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useT } from './LanguageProvider';

interface FormatSelectorProps {
  value: string;
  onChange: (fmt: string) => void;
}

const FORMAT_KEYS = ['auto', 'webp', 'avif', 'png', 'jpg'] as const;

export default function FormatSelector({ value, onChange }: FormatSelectorProps) {
  const { t } = useT();

  return (
    <div className="space-y-2">
      <Label>{t('format.label')}</Label>
      <Select value={value} onValueChange={(v) => v && onChange(v)}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {FORMAT_KEYS.map((f) => (
            <SelectItem key={f} value={f}>
              {t(`format.${f}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
