// src/lib/i18n.ts

export type Locale = 'en' | 'zh';

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Header
    'header.home': 'Home',
    'header.privacy': 'Privacy',

    // Footer
    'footer.copyright': 'Free online image processing tool.',

    // Homepage
    'home.title': 'Free Online Image Processing Tool',
    'home.subtitle': 'No registration required. Crop, resize, compress, convert formats, and add watermarks.',

    // Upload
    'upload.hint': 'Click or drag to upload an image',
    'upload.limit': 'Supports JPG, PNG, WebP, AVIF. Max 10MB.',

    // Editor
    'editor.options': 'Edit Options',

    // Format
    'format.label': 'Output Format',
    'format.auto': 'Auto (keep original)',
    'format.webp': 'WebP',
    'format.avif': 'AVIF',
    'format.png': 'PNG',
    'format.jpg': 'JPEG',

    // Quality
    'quality.label': 'Compression Quality',
    'quality.auto': 'Auto optimize',

    // Resize
    'resize.label': 'Resize',
    'resize.thumbnail': 'Thumbnail',
    'resize.small': 'Small',
    'resize.medium': 'Medium',
    'resize.large': 'Large',
    'resize.width': 'Width (px)',
    'resize.height': 'Height (px)',
    'resize.auto': 'Auto',
    'resize.cropMode': 'Crop mode',
    'resize.fill': 'Crop fill',
    'resize.fit': 'Fit',
    'resize.scale': 'Scale',
    'resize.pad': 'Pad',

    // Rotate
    'rotate.label': 'Rotate & Flip',
    'rotate.cw': 'Rotate CW',
    'rotate.ccw': 'Rotate CCW',
    'rotate.flipH': 'Flip H',
    'rotate.flipV': 'Flip V',

    // Watermark
    'watermark.label': 'Watermark',
    'watermark.upload': 'Upload Watermark',
    'watermark.uploaded': 'Watermark uploaded',
    'watermark.opacity': 'Opacity',
    'watermark.position': 'Position',
    'watermark.bottomRight': 'Bottom Right',
    'watermark.bottomLeft': 'Bottom Left',
    'watermark.topRight': 'Top Right',
    'watermark.topLeft': 'Top Left',
    'watermark.center': 'Center',

    // Preview
    'preview.label': 'Preview',
    'preview.processing': 'Processing...',
    'preview.empty': 'Upload an image to start',

    // Download
    'download.button': 'Download Processed Image',

    // Upload error
    'upload.error': 'Upload failed. Please check your file and try again.',
  },

  zh: {
    // Header
    'header.home': '首页',
    'header.privacy': '隐私政策',

    // Footer
    'footer.copyright': '免费在线图片处理工具。',

    // Homepage
    'home.title': '免费在线图片处理工具',
    'home.subtitle': '无需注册。裁剪、缩放、压缩、转换格式、添加水印。',

    // Upload
    'upload.hint': '点击或拖拽上传图片',
    'upload.limit': '支持 JPG、PNG、WebP、AVIF，最大 10MB',

    // Editor
    'editor.options': '编辑选项',

    // Format
    'format.label': '输出格式',
    'format.auto': '自动（保持原格式）',
    'format.webp': 'WebP',
    'format.avif': 'AVIF',
    'format.png': 'PNG',
    'format.jpg': 'JPEG',

    // Quality
    'quality.label': '压缩质量',
    'quality.auto': '自动优化',

    // Resize
    'resize.label': '尺寸调整',
    'resize.thumbnail': '缩略图',
    'resize.small': '小图',
    'resize.medium': '中图',
    'resize.large': '大图',
    'resize.width': '宽度 (px)',
    'resize.height': '高度 (px)',
    'resize.auto': '自动',
    'resize.cropMode': '填充模式',
    'resize.fill': '裁剪填充',
    'resize.fit': '适应',
    'resize.scale': '拉伸',
    'resize.pad': '留白',

    // Rotate
    'rotate.label': '旋转与翻转',
    'rotate.cw': '顺时针旋转',
    'rotate.ccw': '逆时针旋转',
    'rotate.flipH': '水平翻转',
    'rotate.flipV': '垂直翻转',

    // Watermark
    'watermark.label': '水印',
    'watermark.upload': '上传水印',
    'watermark.uploaded': '水印已上传',
    'watermark.opacity': '不透明度',
    'watermark.position': '位置',
    'watermark.bottomRight': '右下',
    'watermark.bottomLeft': '左下',
    'watermark.topRight': '右上',
    'watermark.topLeft': '左上',
    'watermark.center': '居中',

    // Preview
    'preview.label': '预览',
    'preview.processing': '处理中...',
    'preview.empty': '请先上传图片',

    // Download
    'download.button': '下载处理后的图片',

    // Upload error
    'upload.error': '上传失败，请检查文件后重试。',
  },
};

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations['en']?.[key] ?? key;
}
