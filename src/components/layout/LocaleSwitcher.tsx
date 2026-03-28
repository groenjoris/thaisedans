'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

const localeLabels: Record<string, string> = {
  en: 'EN',
  nl: 'NL',
  th: 'TH',
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    // Replace the locale segment in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="text-thai-cream/30 mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`transition-colors ${
              locale === loc
                ? 'text-thai-gold font-semibold'
                : 'text-thai-cream/60 hover:text-thai-cream'
            }`}
          >
            {localeLabels[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
