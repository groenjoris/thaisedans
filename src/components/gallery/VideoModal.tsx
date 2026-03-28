'use client';

import { useEffect, useRef } from 'react';

interface VideoModalProps {
  src: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ src, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEscape);

    // Auto-play
    setTimeout(() => videoRef.current?.play(), 100);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          <span>Close</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-thai-gold font-[family-name:var(--font-heading)] text-xl mb-3">
          {title}
        </h3>

        {/* Video */}
        <video
          ref={videoRef}
          controls
          playsInline
          className="w-full rounded-sm shadow-2xl"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
