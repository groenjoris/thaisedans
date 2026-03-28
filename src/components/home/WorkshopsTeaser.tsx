import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function WorkshopsTeaser() {
  const t = useTranslations('workshops');
  const locale = useLocale();

  return (
    <section className="bg-thai-cream lai-thai-light py-20 lg:py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-thai-darkest mb-4">
              Workshops
            </h2>
            <p className="text-thai-dark/80 leading-relaxed mb-6">
              {t('intro')}
            </p>
            <ul className="space-y-2 mb-8">
              {(t.raw('items') as string[]).map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-thai-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-thai-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href={`/${locale}/workshops`} variant="outline">
              {locale === 'nl' ? 'Meer informatie' : locale === 'th' ? 'ข้อมูลเพิ่มเติม' : 'Learn More'}
            </Button>
          </div>

          <div className="w-48 lg:w-64 flex-shrink-0 opacity-80">
            <Image
              src="/images/ui/dancers-group.png"
              alt="Thai Dancers"
              width={256}
              height={120}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
