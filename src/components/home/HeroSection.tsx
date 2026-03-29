'use client';

import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  const moreInfoLabel =
    locale === 'nl' ? 'Meer informatie' : locale === 'th' ? 'ข้อมูลเพิ่มเติม' : 'More info';

  function scrollToNext() {
    const hero = document.getElementById('hero-section');
    if (hero) {
      const nextSection = hero.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <section id="hero-section" className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={`${basePath}/images/hero/hero-poster.jpg`}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${basePath}/images/hero/hero-video.mp4`} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-thai-darkest/90 via-thai-darkest/70 to-thai-darkest/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-thai-darkest/80 via-transparent to-thai-darkest/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl text-center mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold text-thai-gold mb-4 leading-tight">
            Akhira
          </h1>
          <p className="text-xl sm:text-2xl text-thai-cream/90 mb-2 font-[family-name:var(--font-heading)] font-light">
            {t('tagline')}
          </p>
          <p className="text-thai-cream/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            {t('home.intro').slice(0, 150)}...
          </p>
          <div className="flex flex-col items-center gap-3">
            <Button href={`/${locale}/contact`}>
              {locale === 'nl'
                ? 'Check beschikbaarheid'
                : locale === 'th'
                  ? 'ตรวจสอบความพร้อม'
                  : 'Check Availability'}
            </Button>
            <button
              onClick={scrollToNext}
              className="flex items-center gap-2 text-thai-cream/70 hover:text-thai-gold transition-colors text-sm mt-2"
            >
              {moreInfoLabel}
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
