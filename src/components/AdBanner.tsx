'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdBanner({ slot, format = 'auto', className = '' }: AdBannerProps) {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = insRef.current;
      if (!el || el.clientWidth === 0) return;
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      } catch (e) {
        console.warn('AdSense push error:', e);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`flex justify-center my-4 ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '300px' }}
        data-ad-client="ca-pub-3646388292078835"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
