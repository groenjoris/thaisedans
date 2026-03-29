import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function getHomePhotos(): string[] {
  const dir = path.join(process.cwd(), 'public/images/home');
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map((f) => `${basePath}/images/home/${f}`);
  } catch {
    return [];
  }
}

export default function PhotoShowcase() {
  const photos = getHomePhotos();
  if (photos.length === 0) return null;

  return (
    <section className="bg-thai-darkest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-sm group ${
                i === 0
                  ? 'col-span-2 lg:col-span-1 lg:row-span-2 aspect-[3/4]'
                  : i === photos.length - 1
                    ? 'col-span-2 lg:col-span-2 aspect-[2/1]'
                    : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={src}
                alt="Akhira Thai Dance performance"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={src.includes('home-03') ? { objectPosition: 'top' } : undefined}
                sizes={
                  i === 0
                    ? '(max-width: 768px) 100vw, 33vw'
                    : i === photos.length - 1
                      ? '(max-width: 768px) 100vw, 66vw'
                      : '(max-width: 768px) 50vw, 33vw'
                }
                priority={i < 2}
              />
              <div className="absolute inset-0 border border-thai-gold/0 group-hover:border-thai-gold/40 transition-all duration-500 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
