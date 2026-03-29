'use client';

import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';

interface VideoCardProps {
  vimeoId: string;
  title: string;
}

export default function VideoCard({ vimeoId, title }: VideoCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="relative rounded-sm overflow-hidden bg-thai-darkest aspect-video group w-full text-left"
        aria-label={`Play: ${title}`}
      >
        {/* Vimeo Thumbnail */}
        <Image
          src={`https://vumbnail.com/${vimeoId}.jpg`}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-thai-gold/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-thai-gold transition-all duration-300 shadow-xl">
            <svg
              className="w-7 h-7 text-thai-darkest ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>

      {showModal && (
        <VideoModal
          vimeoId={vimeoId}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
