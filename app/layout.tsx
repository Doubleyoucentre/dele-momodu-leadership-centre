import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { siteUrl, publicAsset } from '@/lib/site-config';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  icons: { icon: publicAsset('/images/brand/dmlc-icon.png'), apple: publicAsset('/images/brand/dmlc-icon.png') },
  title: {
    default: 'Dele Momodu Leadership Centre',
    template: '%s | DMLC',
  },
  description:
    'A sanctuary for scholarship, research, leadership and ideas in Alalubosa GRA, Ibadan, Nigeria.',
  applicationName: 'Dele Momodu Leadership Centre',
  openGraph: {
    title: 'Dele Momodu Leadership Centre',
    description: 'A sanctuary for scholarship, research, leadership and ideas in Ibadan, Nigeria.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dele Momodu Leadership Centre',
    description: 'A sanctuary for scholarship, research, leadership and ideas in Ibadan, Nigeria.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href={publicAsset('/fonts/8760c4774489e4ba-s.p.woff2')} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href={publicAsset('/fonts/7b89a4fd5e90ede0-s.p.woff2')} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href={publicAsset('/fonts/fonts.css')} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
