import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('title'),
    description: `Contact Akhira Thai Dance - ${t('email')}`,
    alternates: {
      languages: { en: '/en/contact', nl: '/nl/contact', th: '/th/contact' },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="min-h-screen bg-thai-cream lai-thai-light pt-24 pb-20">
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-darkest mb-6 text-center">
          {t('title')}
        </h1>

        <div className="bg-white/60 backdrop-blur-sm rounded-sm border border-thai-gold/20 p-8 sm:p-12 text-center">
          <p className="text-thai-dark/80 mb-10 leading-relaxed">
            {locale === 'nl'
              ? 'Heeft u een vraag of wilt u een vrijblijvende offerte? Neem contact met ons op.'
              : locale === 'th'
                ? 'มีคำถามหรือต้องการใบเสนอราคา? กรุณาติดต่อเรา'
                : 'Do you have a question or would you like a free quote? Please contact us.'}
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-thai-dark/50 uppercase tracking-wider mb-1">
                {t('name')}
              </p>
              <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-thai-darkest">
                {t('name')}
              </p>
            </div>

            <div className="thai-divider" />

            <div>
              <p className="text-sm text-thai-dark/50 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${t('email')}`}
                className="text-xl text-thai-gold hover:text-thai-gold-light transition-colors font-semibold"
              >
                {t('email')}
              </a>
            </div>

            <div>
              <p className="text-sm text-thai-dark/50 uppercase tracking-wider mb-1">
                {locale === 'nl' ? 'Telefoon' : locale === 'th' ? 'โทรศัพท์' : 'Phone'}
              </p>
              <a
                href={`tel:${t('phone').replace(/\s/g, '')}`}
                className="text-xl text-thai-gold hover:text-thai-gold-light transition-colors font-semibold"
              >
                {t('phone')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
