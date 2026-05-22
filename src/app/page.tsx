import ImageEditor from '@/components/ImageEditor';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free Online Image Processing Tool
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No registration required. Crop, resize, compress, convert formats, and add watermarks.
        </p>
      </div>

      <AdBanner slot="1234567892" format="horizontal" />

      <ImageEditor />
    </div>
  );
}
