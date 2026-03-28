import { setRequestLocale, getTranslations } from 'next-intl/server';
import { getGalleryPhotos, getLegacyPhotos } from '@/lib/gallery';
import PhotoGrid from '@/components/gallery/PhotoGrid';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'photos' });
  return {
    title: t('title'),
    alternates: {
      languages: { en: '/en/photos', nl: '/nl/photos', th: '/th/photos' },
    },
  };
}

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'photos' });

  const newPhotos = getGalleryPhotos();
  const legacy = getLegacyPhotos();

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Modern Gallery */}
      <section className="bg-thai-cream lai-thai-light pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-thai-darkest mb-2 text-center pt-4">
            {t('title')}
          </h1>
          <p className="text-center text-thai-dark/60 mb-10 text-lg font-[family-name:var(--font-heading)]">
            {t('subtitle')}
          </p>
          {newPhotos.length > 0 && (
            <PhotoGrid photos={newPhotos} columns={3} />
          )}
        </div>
      </section>

      {/* Legacy Archive */}
      {(legacy.thaiDance.length > 0 || legacy.thaisedans.length > 0) && (
        <section className="bg-thai-dark lai-thai-dark py-16">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {legacy.thaiDance.length > 0 && (
              <PhotoGrid
                photos={legacy.thaiDance}
                columns={4}
                vintage
              />
            )}

            {legacy.thaisedans.length > 0 && (
              <div className="mt-12">
                <PhotoGrid
                  photos={legacy.thaisedans}
                  columns={4}
                  vintage
                />
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
