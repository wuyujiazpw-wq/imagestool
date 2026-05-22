// src/components/CropRotatePanel.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RotateCw, RotateCcw, FlipHorizontal, FlipVertical } from 'lucide-react';
import { useT } from './LanguageProvider';

interface CropRotatePanelProps {
  angle: number;
  onAngleChange: (a: number) => void;
  flip: 'h' | 'v' | undefined;
  onFlipChange: (f: 'h' | 'v' | undefined) => void;
}

export default function CropRotatePanel({ angle, onAngleChange, flip, onFlipChange }: CropRotatePanelProps) {
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
        <Button
          variant={flip === 'h' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFlipChange(flip === 'h' ? undefined : 'h')}
        >
          <FlipHorizontal className="h-4 w-4 mr-1" />
          {t('rotate.flipH')}
        </Button>
        <Button
          variant={flip === 'v' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFlipChange(flip === 'v' ? undefined : 'v')}
        >
          <FlipVertical className="h-4 w-4 mr-1" />
          {t('rotate.flipV')}
        </Button>
      </div>
    </div>
  );
}
