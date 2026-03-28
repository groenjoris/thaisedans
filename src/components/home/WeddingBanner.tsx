import { useLocale } from 'next-intl';
import Button from '@/components/ui/Button';

const content = {
  en: {
    title: 'Thai Wedding Entertainment',
    text: 'Make your special day unforgettable with an authentic Thai dance performance. We create bespoke shows for weddings and celebrations.',
    cta: 'Check Availability',
  },
  nl: {
    title: 'Thais Bruiloft Entertainment',
    text: 'Maak uw speciale dag onvergetelijk met een authentiek Thais dansoptreden. Wij creëren op maat gemaakte shows voor bruiloften en feesten.',
    cta: 'Check beschikbaarheid',
  },
  th: {
    title: 'งานแต่งงานแบบไทย',
    text: 'ทำให้วันพิเศษของคุณน่าจดจำด้วยการแสดงรำไทยแท้ เราสร้างโชว์เฉพาะสำหรับงานแต่งงานและงานฉลอง',
    cta: 'ตรวจสอบความพร้อม',
  },
};

export default function WeddingBanner() {
  const locale = useLocale();
  const c = content[locale as keyof typeof content] || content.en;

  return (
    <section className="bg-thai-darkest lai-thai-dark py-16 lg:py-20">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-thai-gold mb-4">
          {c.title}
        </h2>
        <p className="text-thai-cream/70 mb-8 leading-relaxed">{c.text}</p>
        <Button href={`/${locale}/contact`}>{c.cta}</Button>
      </div>
    </section>
  );
}
