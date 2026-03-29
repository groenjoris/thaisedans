'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

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
              vintage ? 'hover:opacity-100' : ''
            }`}
          >
            <div style={{ aspectRatio: '3 / 4', position: 'relative' }}>
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className={`object-cover transition-all duration-500 ease-out ${
                  loadedImages.has(i)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-[0.98]'
                } group-hover:scale-105 ${vintage ? 'sepia-[.15]' : ''}`}
                sizes={`(max-width: 768px) ${Math.floor(100 / Math.min(columns, 2))}vw, ${Math.floor(100 / columns)}vw`}
                loading={i < 6 ? 'eager' : 'lazy'}
                onLoad={() => handleImageLoad(i)}
              />
            </div>
            <div className="absolute inset-0 bg-thai-gold/0 group-hover:bg-thai-gold/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={photos.map((src) => ({ src }))}
        styles={{
          container: { backgroundColor: 'rgba(26, 15, 10, 0.95)' },
        }}
      />
    </>
  );
}
