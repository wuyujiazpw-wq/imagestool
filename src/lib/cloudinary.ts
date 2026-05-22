// src/lib/cloudinary.ts

function getCloudName(): string {
  const name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!name) {
    throw new Error(
      'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not configured. ' +
      'Set it in .env.local or your deployment environment variables.'
    );
  }
  return name;
}

let cloudNameCache: string | null = null;

function getCachedCloudName(): string {
  if (!cloudNameCache) {
    cloudNameCache = getCloudName();
  }
  return cloudNameCache;
}

export interface TransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'pad' | 'crop';
  quality?: number | 'auto';
  format?: 'jpg' | 'png' | 'webp' | 'avif' | 'auto';
  angle?: number;
  flip?: 'h' | 'v';
  effect?: string;
  overlay?: string;
  overlayWidth?: number;
  overlayOpacity?: number;
  overlayGravity?: string;
}

export function buildImageUrl(publicId: string, options: TransformOptions): string {
  if (!publicId) {
    throw new Error('publicId is required to build a Cloudinary URL');
  }
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
  if (options.effect) transforms.push(`e_${options.effect}`);

  if (options.overlay) {
    transforms.push(`l_${options.overlay}`);
    if (options.overlayWidth) transforms.push(`w_${options.overlayWidth}`);
    if (options.overlayOpacity) transforms.push(`o_${options.overlayOpacity}`);
    if (options.overlayGravity) transforms.push(`g_${options.overlayGravity}`);
    transforms.push('fl_layer_apply');
  }

  const transformStr = transforms.join(',');
  return `https://res.cloudinary.com/${getCachedCloudName()}/image/upload/${transformStr}/${publicId}`;
}

export function getOriginalUrl(publicId: string): string {
  if (!publicId) {
    throw new Error('publicId is required to build a Cloudinary URL');
  }
  return `https://res.cloudinary.com/${getCachedCloudName()}/image/upload/${publicId}`;
}
