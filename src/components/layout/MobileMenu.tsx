'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect } from 'react';

interface NavItem {
  key: string;
  href: string;
}

export default function MobileMenu({
  open,
  onClose,
  navKeys,
}: {
  open: boolean;
  onClose: () => void;
  navKeys: readonly NavItem[];
}) {
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-72 bg-thai-darkest lai-thai-dark transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative z-10 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-thai-cream p-2"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>

          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-thai-gold mb-10 mt-2">
            Akhira
          </p>

          <nav className="flex flex-col gap-4">
            {navKeys.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                onClick={onClose}
                className="text-lg text-thai-cream/80 hover:text-thai-gold transition-colors font-medium py-1"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
