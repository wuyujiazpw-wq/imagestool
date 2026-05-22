import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://aiimagestool.com';

export const metadata: Metadata = {
  title: 'AiimagesTool - Free Online AI Image Processing Tool',
  description:
    'Crop, resize, compress, convert format, and add watermarks to your images online. Free, no registration required.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      zh: baseUrl,
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-3646388292078835',
  },
  openGraph: {
    title: 'AiimagesTool - Free Online AI Image Processing Tool',
    description:
      'Crop, resize, compress, convert format, and add watermarks to your images online. Free, no registration required.',
    url: baseUrl,
    siteName: 'AiimagesTool',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiimagesTool - Free Online AI Image Processing Tool',
    description:
      'Crop, resize, compress, convert format, and add watermarks to your images online. Free, no registration required.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </LanguageProvider>
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'AiimagesTool',
              url: baseUrl,
              description:
                'Crop, resize, compress, convert format, and add watermarks to your images online. Free, no registration required.',
              applicationCategory: 'Multimedia',
              operatingSystem: 'All',
              browserRequirements: 'Requires JavaScript',
              offers: {
                '@type': 'Offer',
                price: 0,
                priceCurrency: 'USD',
              },
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3646388292078835"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
