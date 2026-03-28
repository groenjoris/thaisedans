'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import MobileMenu from './MobileMenu';

const navKeys = [
  { key: 'home', href: '/home' },
  { key: 'video', href: '/video' },
  { key: 'photos', href: '/photos' },
  { key: 'workshops', href: '/workshops' },
  { key: 'thaiDance', href: '/thai-dance' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Pages with dark hero background (video/image) where white text is fine
  const isHomePage = pathname === `/${locale}/home` || pathname === `/${locale}`;
  const isDarkPage = isHomePage || pathname.includes('/video');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On light pages or when scrolled, use dark background with light text
  // On dark pages (home, video) at top, transparent with light text
  const headerBg = scrolled
    ? 'bg-thai-darkest/95 backdrop-blur-sm shadow-lg'
    : isDarkPage
      ? 'bg-transparent'
      : 'bg-thai-darkest/95 backdrop-blur-sm shadow-lg';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}/home`}
              className="flex flex-col items-start"
            >
              <span className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-bold text-thai-gold hover:text-thai-gold-light transition-colors leading-tight">
                Akhira
              </span>
              <span className="text-[10px] lg:text-xs text-thai-cream/60 tracking-wider leading-tight">
                {t('tagline' as any)}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navKeys.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className="text-sm text-thai-cream/80 hover:text-thai-gold transition-colors font-medium"
                >
                  {t(key)}
                </Link>
              ))}
              <LocaleSwitcher />
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-3">
              <LocaleSwitcher />
              <button
                onClick={() => setMobileOpen(true)}
                className="text-thai-cream p-2"
                aria-label="Open menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navKeys={navKeys}
      />
    </>
  );
}
