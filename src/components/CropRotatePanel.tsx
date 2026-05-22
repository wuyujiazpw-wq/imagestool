'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RotateCw, RotateCcw, FlipHorizontal, FlipVertical } from 'lucide-react';

interface CropRotatePanelProps {
  angle: number;
  onAngleChange: (a: number) => void;
  flip: 'h' | 'v' | undefined;
  onFlipChange: (f: 'h' | 'v' | undefined) => void;
}

export default function CropRotatePanel({ angle, onAngleChange, flip, onFlipChange }: CropRotatePanelProps) {
  return (
    <div className="space-y-3">
      <Label>Rotate & Flip</Label>
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAngleChange((angle + 90) % 360)}
        >
          <RotateCw className="h-4 w-4 mr-1" />
          Rotate CW
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAngleChange((angle - 90 + 360) % 360)}
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Rotate CCW
        </Button>
        <Button
          variant={flip === 'h' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFlipChange(flip === 'h' ? undefined : 'h')}
        >
          <FlipHorizontal className="h-4 w-4 mr-1" />
          Flip H
        </Button>
        <Button
          variant={flip === 'v' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFlipChange(flip === 'v' ? undefined : 'v')}
        >
          <FlipVertical className="h-4 w-4 mr-1" />
          Flip V
        </Button>
      </div>
    </div>
  );
}
