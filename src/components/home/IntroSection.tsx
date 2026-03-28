import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function IntroSection() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="bg-thai-cream lai-thai-light py-20 lg:py-28">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-thai-darkest mb-6">
          {t('offerTitle')}
        </h2>
        <p className="text-thai-dark/80 leading-relaxed mb-8">{t('intro')}</p>

        <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          {(t.raw('offerItems') as string[]).map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-thai-darkest">
              <span className="w-2 h-2 rounded-full bg-thai-gold flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-thai-dark/70">
          {(() => {
            const raw = t.raw('workshopsText') as string;
            const parts = raw.split('[link]');
            return (
              <>
                {parts[0]}
                <Link
                  href={`/${locale}/workshops`}
                  className="text-thai-gold hover:text-thai-gold-light font-semibold underline underline-offset-2 transition-colors"
                >
                  {t('workshopsLink')}
                </Link>
                {parts[1]}
              </>
            );
          })()}
        </p>
      </div>

      <div className="thai-divider mt-16" />
    </section>
  );
}
