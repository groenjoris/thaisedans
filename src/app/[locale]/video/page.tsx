import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getVideos } from '@/lib/gallery';
import VideoCard from '@/components/gallery/VideoCard';

// Video titles - these map to the performance-XX.mp4 filenames in order
const videoTitles = [
  'Thailand Grand Festival, Amsterdam',
  'Mekkala Dance Performance',
  'Thai Gala, Grote Kerk Amsterdam',
  'Vakantiebeurs, Utrecht',
  'Sai Yai Thai Celebration',
  'Pasar Asia, Group Dance',
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

  const videos = getVideos();

  return (
    <div className="min-h-screen bg-thai-darkest lai-thai-dark pt-24 pb-20">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-gold mb-10 text-center">
          {t('title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((src, i) => (
            <VideoCard
              key={src}
              src={src}
              title={videoTitles[i] || `Performance ${i + 1}`}
              index={i}
            />
          ))}
        </div>

        {videos.length === 0 && (
          <p className="text-thai-cream/50 text-center py-20">
            Videos coming soon...
          </p>
        )}
      </div>
    </div>
  );
}
