import type { MetadataRoute } from 'next';
import { routing } from '@/lib/i18n/routing';

const pages = [
  '/home',
  '/video',
  '/photos',
  '/workshops',
  '/thai-dance',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thaisedans.nl';

  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '/home' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  );
}
