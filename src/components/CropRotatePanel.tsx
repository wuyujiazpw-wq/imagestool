// src/components/CropRotatePanel.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RotateCw, RotateCcw } from 'lucide-react';
import { useT } from './LanguageProvider';

interface CropRotatePanelProps {
  angle: number;
  onAngleChange: (a: number) => void;
}

export default function CropRotatePanel({ angle, onAngleChange }: CropRotatePanelProps) {
  const { t } = useT();

  return (
    <div className="space-y-3">
      <Label>{t('rotate.label')}</Label>
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAngleChange((angle + 90) % 360)}
        >
          <RotateCw className="h-4 w-4 mr-1" />
          {t('rotate.cw')}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAngleChange((angle - 90 + 360) % 360)}
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          {t('rotate.ccw')}
        </Button>
      </div>
    </div>
  );
}
