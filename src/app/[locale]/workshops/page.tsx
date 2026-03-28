import { setRequestLocale, getTranslations } from 'next-intl/server';
import Button from '@/components/ui/Button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: 'Workshops',
    alternates: {
      languages: {
        en: '/en/workshops',
        nl: '/nl/workshops',
        th: '/th/workshops',
      },
    },
  };
}

export default async function WorkshopsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'workshops' });

  return (
    <div className="min-h-screen bg-thai-cream lai-thai-light pt-24 pb-20">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-darkest mb-6">
          Workshops
        </h1>

        <p className="text-thai-dark/80 leading-relaxed mb-8 text-lg">
          {t('intro')}
        </p>

        <p className="text-thai-dark/70 mb-6">{t('subtitle')}</p>

        <ul className="space-y-3 mb-12 text-left max-w-md mx-auto">
          {(t.raw('items') as string[]).map((item: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 text-thai-dark"
            >
              <span className="w-2 h-2 rounded-full bg-thai-gold flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button href={`/${locale}/contact`}>
          {locale === 'nl'
            ? 'Check beschikbaarheid'
            : locale === 'th'
              ? 'ตรวจสอบความพร้อม'
              : 'Check Availability'}
        </Button>
      </div>
    </div>
  );
}
