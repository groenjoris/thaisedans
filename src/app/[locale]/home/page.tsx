import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import PhotoShowcase from '@/components/home/PhotoShowcase';
import ClientsShowcase from '@/components/home/ClientsShowcase';
import WorkshopsTeaser from '@/components/home/WorkshopsTeaser';
import WeddingBanner from '@/components/home/WeddingBanner';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Thai Dance Performances & Workshops in Europe',
    nl: 'Thaise Dansvoorstellingen & Workshops in Europa',
    th: 'การแสดงรำไทยและเวิร์กช้อปในยุโรป',
  };
  const descriptions: Record<string, string> = {
    en: 'Akhira organizes Thai dance performances at parties, events, weddings and any occasion. Based in Amsterdam, performing across Europe.',
    nl: 'Akhira verzorgt Thaise dansvoorstellingen op feesten, evenementen, bruiloften en overal waar mensen een Thais gevoel willen creëren.',
    th: 'อาคิรารับงานรำและแสดงดนตรีไทยในงานฉลอง งานรื่นเริง งานแต่งงาน และทุกที่หากต้องการให้มีบรรยากาศแบบไทยๆ',
  };
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      languages: { en: '/en/home', nl: '/nl/home', th: '/th/home' },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <PhotoShowcase />
      <ClientsShowcase />
      <WorkshopsTeaser />
      <WeddingBanner />
    </>
  );
}
