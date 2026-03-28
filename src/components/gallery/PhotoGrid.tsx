'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface PhotoGridProps {
  photos: string[];
  columns?: number;
  vintage?: boolean;
}

export default function PhotoGrid({
  photos,
  columns = 3,
  vintage = false,
}: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <div
        className="gap-3"
        style={{
          columnCount: columns,
          columnGap: '0.75rem',
        }}
      >
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(i)}
            className={`relative w-full mb-3 overflow-hidden rounded-sm group block break-inside-avoid ${
              vintage ? 'opacity-90 hover:opacity-100' : ''
            }`}
          >
            <Image
              src={src}
              alt={`Gallery photo ${i + 1}`}
              width={600}
              height={400}
              className={`w-full h-auto transition-transform duration-500 group-hover:scale-105 ${
                vintage ? 'sepia-[.15]' : ''
              }`}
              sizes={`(max-width: 768px) ${Math.floor(100 / Math.min(columns, 2))}vw, ${Math.floor(100 / columns)}vw`}
              loading={i < 6 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-thai-gold/0 group-hover:bg-thai-gold/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={photos.map((src) => ({ src: `${basePath}${src}` }))}
        styles={{
          container: { backgroundColor: 'rgba(26, 15, 10, 0.95)' },
        }}
      />
    </>
  );
}
