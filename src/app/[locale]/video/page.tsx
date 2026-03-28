import { setRequestLocale, getTranslations } from 'next-intl/server';
import VideoCard from '@/components/gallery/VideoCard';

const videos = [
  { vimeoId: '1178063976', title: 'Thailand Grand Festival, Amsterdam' },
  { vimeoId: '1178063938', title: 'Mekkala Dance Performance' },
  { vimeoId: '1178063917', title: 'Thai Gala, Grote Kerk Amsterdam' },
  { vimeoId: '1178063901', title: 'Vakantiebeurs, Utrecht' },
  { vimeoId: '1178063883', title: 'Sai Yai Thai Celebration' },
  { vimeoId: '1178063861', title: 'Pasar Asia, Group Dance' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'video' });
  return {
    title: t('title'),
    alternates: {
      languages: { en: '/en/video', nl: '/nl/video', th: '/th/video' },
    },
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'video' });

  return (
    <div className="min-h-screen bg-thai-darkest lai-thai-dark pt-24 pb-20">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-gold mb-10 text-center">
          {t('title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.vimeoId}
              vimeoId={video.vimeoId}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
