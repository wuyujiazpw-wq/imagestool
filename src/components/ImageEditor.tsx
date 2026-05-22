// src/components/ImageEditor.tsx
'use client';

import { useState, useMemo } from 'react';
import ImageUploader from './ImageUploader';
import FormatSelector from './FormatSelector';
import QualitySlider from './QualitySlider';
import ResizePanel from './ResizePanel';
import CropRotatePanel from './CropRotatePanel';
import WatermarkPanel from './WatermarkPanel';
import PreviewPanel from './PreviewPanel';
import DownloadButton from './DownloadButton';
import AdBanner from './AdBanner';
import { buildImageUrl } from '@/lib/cloudinary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useT } from './LanguageProvider';

export default function ImageEditor() {
  const { t } = useT();
  const [publicId, setPublicId] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [format, setFormat] = useState('auto');
  const [autoQuality, setAutoQuality] = useState(true);
  const [quality, setQuality] = useState([80]);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [cropMode, setCropMode] = useState('fill');
  const [angle, setAngle] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [watermarkPublicId, setWatermarkPublicId] = useState<string | null>(null);
  const [watermarkOpacity, setWatermarkOpacity] = useState([70]);
  const [watermarkPosition, setWatermarkPosition] = useState('south_east');

  const previewUrl = useMemo(() => {
    if (!publicId) return null;

    const w = width ? parseInt(width) : undefined;
    const h = height ? parseInt(height) : undefined;

    return buildImageUrl(publicId, {
      width: w,
      height: h,
      crop: (w || h) ? (cropMode as 'fill' | 'fit' | 'scale' | 'pad' | 'crop') : undefined,
      quality: autoQuality ? 'auto' : quality[0],
      format: format === 'auto' ? undefined : (format as 'jpg' | 'png' | 'webp' | 'avif'),
      angle: angle || undefined,
      flipH,
      flipV,
      overlay: watermarkPublicId || undefined,
      overlayWidth: 150,
      overlayOpacity: watermarkOpacity[0],
      overlayGravity: watermarkPosition,
    });
  }, [publicId, format, autoQuality, quality, width, height, cropMode, angle, flipH, flipV, watermarkPublicId, watermarkOpacity, watermarkPosition]);

  const handleUpload = (id: string, url: string) => {
    setPublicId(id);
    setOriginalUrl(url);
    setAngle(0);
    setFlipH(false);
    setFlipV(false);
    setFormat('auto');
    setAutoQuality(true);
    setQuality([80]);
    setWidth('');
    setHeight('');
    setWatermarkPublicId(null);
    setWatermarkOpacity([70]);
    setWatermarkPosition('south_east');
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <ImageUploader onUpload={handleUpload} />

        {publicId && (
          <>
            <Separator />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('editor.options')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormatSelector value={format} onChange={setFormat} />
                <QualitySlider
                  value={quality}
                  onChange={setQuality}
                  autoQuality={autoQuality}
                  onAutoToggle={setAutoQuality}
                />
                <Separator />
                <ResizePanel
                  width={width}
                  height={height}
                  onWidthChange={setWidth}
                  onHeightChange={setHeight}
                  cropMode={cropMode}
                  onCropModeChange={setCropMode}
                />
                <Separator />
                <CropRotatePanel
                  angle={angle}
                  onAngleChange={setAngle}
                  flipH={flipH}
                  flipV={flipV}
                  onFlipHChange={setFlipH}
                  onFlipVChange={setFlipV}
                />
                <Separator />
                <WatermarkPanel
                  watermarkPublicId={watermarkPublicId}
                  onWatermarkUpload={setWatermarkPublicId}
                  onWatermarkRemove={() => setWatermarkPublicId(null)}
                  opacity={watermarkOpacity}
                  onOpacityChange={setWatermarkOpacity}
                  position={watermarkPosition}
                  onPositionChange={setWatermarkPosition}
                />
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="space-y-4">
        <PreviewPanel
          previewUrl={previewUrl}
          originalUrl={originalUrl}
        />
        {previewUrl && (
          <DownloadButton url={previewUrl} />
        )}
        {publicId && (
          <AdBanner slot="1234567891" format="rectangle" />
        )}
      </div>
    </div>
  );
}
