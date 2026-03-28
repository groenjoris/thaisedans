import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Noto_Sans_Thai } from 'next/font/google';
import { getOrganizationSchema } from '@/lib/structuredData';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Akhira Thai Dance | Performances & Workshops in Europe',
    template: '%s | Akhira Thai Dance',
  },
  description:
    'Akhira organizes Thai dance performances at parties, events, weddings and any occasion. Based in Amsterdam, performing across Europe.',
  metadataBase: new URL('https://thaisedans.nl'),
  openGraph: {
    type: 'website',
    siteName: 'Akhira Thai Dance',
    locale: 'en',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${cormorant.variable} ${inter.variable} ${notoSansThai.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)] bg-thai-cream text-thai-darkest">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
