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
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('intro.title'),
    alternates: {
      languages: { en: '/en/about', nl: '/nl/about', th: '/th/about' },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  const subNavItems = Object.entries(
    t.raw('subNav') as Record<string, string>
  ).map(([key, label]) => ({ key, label }));

  const introParagraphs = t.raw('intro.paragraphs') as string[];
  const ratchaneekornParagraphs = t.raw('ratchaneekorn.paragraphs') as string[];
  const clients = t.raw('clients.list') as string[];
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
          paragraphs={introParagraphs}
          image={`${basePath}/images/about/oui.JPG`}
          imageAlt="Ratchaneekorn performing Thai dance"
        />

        <div className="thai-divider my-12" />

        <section id="clients" className="scroll-mt-24 mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-thai-darkest mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-thai-dark/80 mb-6">{t('clients.intro')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {clients.map((client: string) => (
              <p
                key={client}
                className="text-thai-dark/70 py-1.5 border-b border-thai-gold/10 text-sm"
              >
                {client}
              </p>
            ))}
          </div>
        </section>

        <div className="thai-divider my-12" />

        <ContentSection
          id="ratchaneekorn"
          title={t('ratchaneekorn.title')}
          paragraphs={ratchaneekornParagraphs}
          image={`${basePath}/images/about/oui2.JPG`}
          imageAlt="Ratchaneekorn Vichayanon"
          reverse
        />
      </div>
    </div>
  );
}
