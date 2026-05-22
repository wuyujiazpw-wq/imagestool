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

interface ResizePanelProps {
  width: string;
  height: string;
  onWidthChange: (w: string) => void;
  onHeightChange: (h: string) => void;
  cropMode: string;
  onCropModeChange: (m: string) => void;
}

const CROP_MODES = [
  { value: 'fill', label: 'Crop fill' },
  { value: 'fit', label: 'Fit' },
  { value: 'scale', label: 'Scale' },
  { value: 'pad', label: 'Pad' },
];

const PRESETS = [
  { label: 'Thumbnail', w: 150, h: 150 },
  { label: 'Small', w: 400, h: 300 },
  { label: 'Medium', w: 800, h: 600 },
  { label: 'Large', w: 1920, h: 1080 },
];

export default function ResizePanel({ width, height, onWidthChange, onHeightChange, cropMode, onCropModeChange }: ResizePanelProps) {
  return (
    <div className="space-y-3">
      <Label>Resize</Label>
      <div className="flex gap-2 flex-wrap">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => { onWidthChange(String(p.w)); onHeightChange(String(p.h)); }}
            className="px-3 py-1 text-xs border rounded-md hover:bg-accent transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">Width (px)</Label>
          <Input
            type="number"
            placeholder="Auto"
            value={width}
            onChange={(e) => onWidthChange(e.target.value)}
            min={1}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Height (px)</Label>
          <Input
            type="number"
            placeholder="Auto"
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            min={1}
          />
        </div>
      </div>
      {(width || height) && (
        <div className="space-y-1">
          <Label className="text-xs">Crop mode</Label>
          <Select value={cropMode} onValueChange={(v) => v && onCropModeChange(v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CROP_MODES.map((m) => (
                <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}
