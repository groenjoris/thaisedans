import { useTranslations } from 'next-intl';

export default function ClientsShowcase() {
  const t = useTranslations('about.clients');

  const clients = t.raw('list') as string[];

  return (
    <section className="bg-thai-dark lai-thai-dark py-20 lg:py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-thai-gold mb-4">
          {t('title')}
        </h2>
        <p className="text-thai-cream/60 mb-10">{t('intro')}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
          {clients.map((client: string) => (
            <p
              key={client}
              className="text-thai-cream/70 text-sm font-medium py-2 border-b border-thai-gold/10"
            >
              {client}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
