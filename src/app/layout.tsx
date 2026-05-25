import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { LanguageProvider } from '@/components/LanguageProvider';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://aiimagestool.com';

export const metadata: Metadata = {
  title: 'Free AI Image Processing Tool Online - No Sign Up Required | AiimagesTool',
  description:
    'Free online AI image processing tool. No registration or login needed. Crop, resize, compress, convert format (JPG, PNG, WebP, AVIF), rotate, and add watermarks to your images instantly in your browser.',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      zh: baseUrl,
    },
  },
  verification: {
    other: {
      'baidu-site-verification': 'codeva-6ag9OP49XC',
    },
  },
  other: {
    'google-adsense-account': 'ca-pub-3646388292078835',
  },
  openGraph: {
    title: 'Free AI Image Processing Tool Online - No Sign Up Required',
    description:
      'Free online AI image processing tool. No registration or login needed. Crop, resize, compress, convert format, rotate, and add watermarks to your images instantly.',
    url: baseUrl,
    siteName: 'AiimagesTool',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Image Processing Tool Online - No Sign Up Required',
    description:
      'Free online AI image processing tool. No registration or login needed. Crop, resize, compress, convert format, rotate, and add watermarks instantly.',
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
        <ThemeProvider>
        <LanguageProvider>
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </LanguageProvider>
        </ThemeProvider>
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'AiimagesTool - Free AI Image Processing Tool',
              url: baseUrl,
              description:
                'Free online AI image processing tool. No registration or login needed. Crop, resize, compress, convert format, rotate, and add watermarks to your images instantly.',
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
