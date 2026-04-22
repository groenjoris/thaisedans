import { setRequestLocale, getTranslations } from 'next-intl/server';
import SubNav from '@/components/content/SubNav';
import ContentSection from '@/components/content/ContentSection';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thaiDance' });
  return {
    title: t('intro.title'),
    alternates: {
      languages: {
        en: '/en/thai-dance',
        nl: '/nl/thai-dance',
        th: '/th/thai-dance',
      },
    },
  };
}

export default async function ThaiDancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'thaiDance' });

  const subNavItems = Object.entries(
    t.raw('subNav') as Record<string, string>
  ).map(([key, label]) => ({ key, label }));

  return (
    <div className="min-h-screen bg-thai-cream lai-thai-light pt-24 pb-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-darkest mb-8 text-center">
          {t('intro.title')}
        </h1>

        <SubNav items={subNavItems} />

        <ContentSection
          id="intro"
          title={t('intro.title')}
          paragraphs={t.raw('intro.paragraphs') as string[]}
          image={`${basePath}/images/about/sukothai.png`}
          imageAlt="Sukhothai Thai Dance"
        />

        <div className="thai-divider my-12" />

        <ContentSection
          id="history"
          title={t('history.title')}
          paragraphs={t.raw('history.paragraphs') as string[]}
          image={`${basePath}/images/about/ramakien.jpg`}
          imageAlt="Ramakien performance"
          imagePosition="left"
          reverse
        />

        <div className="thai-divider my-12" />

        <ContentSection
          id="music"
          title={t('music.title')}
          paragraphs={t.raw('music.paragraphs') as string[]}
          image={`${basePath}/images/about/ranaad.jpg`}
          imagePosition="left"
          image2={`${basePath}/images/about/drums.jpg`}
          imageAlt="Thai musical instruments"
        />
      </div>
    </div>
  );
}
