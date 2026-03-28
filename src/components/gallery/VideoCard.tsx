'use client';

import { useState, useRef, useEffect } from 'react';
import VideoModal from './VideoModal';

interface VideoCardProps {
  src: string;
  title: string;
  index: number;
}

export default function VideoCard({ src, title, index }: VideoCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate thumbnail from video
  useEffect(() => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'metadata';
    video.muted = true;
    video.playsInline = true;

    video.addEventListener('loadeddata', () => {
      // Seek to 2 seconds for a good frame
      video.currentTime = 2;
    });

    video.addEventListener('seeked', () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        setThumbUrl(canvas.toDataURL('image/jpeg', 0.7));
      }
    });

    video.src = src;
  }, [src]);

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />
      <button
        onClick={() => setShowModal(true)}
        className="relative rounded-sm overflow-hidden bg-thai-darkest aspect-video group w-full text-left"
        aria-label={`Play: ${title}`}
      >
        {/* Thumbnail */}
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-thai-dark/80 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-thai-gold/30 border-t-thai-gold rounded-full animate-spin" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-colors" />

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

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-thai-cream font-[family-name:var(--font-heading)] text-lg font-semibold">
            {title}
          </h3>
        </div>
      </button>

      {showModal && (
        <VideoModal
          src={src}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
