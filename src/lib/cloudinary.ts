// src/lib/cloudinary.ts

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';

export interface TransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'pad' | 'crop';
  quality?: number | 'auto';
  format?: 'jpg' | 'png' | 'webp' | 'avif' | 'auto';
  angle?: number;
  flip?: 'h' | 'v' | null;
  effect?: string;
  overlay?: string;           // 水印 public ID
  overlayWidth?: number;
  overlayOpacity?: number;
  overlayGravity?: string;     // 'north_west' | 'north_east' | 'south_west' | 'south_east' | 'center'
}

export function buildImageUrl(publicId: string, options: TransformOptions): string {
  const transforms: string[] = [];

  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.crop) transforms.push(`c_${options.crop}`);
  if (options.quality) {
    transforms.push(options.quality === 'auto' ? 'q_auto' : `q_${options.quality}`);
  }
  if (options.format) transforms.push(`f_${options.format}`);
  if (options.angle) transforms.push(`a_${options.angle}`);
  if (options.flip === 'h') transforms.push('e_hflip');
  if (options.flip === 'v') transforms.push('e_vflip');

  if (options.overlay) {
    transforms.push(`l_${options.overlay}`);
    if (options.overlayWidth) transforms.push(`w_${options.overlayWidth}`);
    if (options.overlayOpacity) transforms.push(`o_${options.overlayOpacity}`);
    if (options.overlayGravity) transforms.push(`g_${options.overlayGravity}`);
    transforms.push('fl_layer_apply');
  }

  const transformStr = transforms.join(',');
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformStr}/${publicId}`;
}

export function getOriginalUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
}
