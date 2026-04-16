'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import PrivacyModal from '@/components/ui/PrivacyModal';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-thai-darkest lai-thai-dark text-thai-cream/80">
      <div className="thai-divider" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-thai-gold mb-2">
              Akhira
            </p>
            <p className="text-sm">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-thai-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-1.5">
              {[
                { key: 'home', href: '/home' },
                { key: 'video', href: '/video' },
                { key: 'photos', href: '/photos' },
                { key: 'workshops', href: '/workshops' },
                { key: 'about', href: '/about' },
                { key: 'contact', href: '/contact' },
              ].map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className="text-sm hover:text-thai-gold transition-colors"
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-thai-gold font-semibold mb-3 text-sm uppercase tracking-wider">
              {t('nav.contact')}
            </h3>
            <div className="flex flex-col gap-1.5 text-sm">
              <p>{t('contact.name')}</p>
              <a
                href={`mailto:${t('contact.email')}`}
                className="hover:text-thai-gold transition-colors"
              >
                {t('contact.email')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-thai-cream/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-thai-cream/40">
          <p>{t('footer.copyright')}</p>
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-thai-gold transition-colors cursor-pointer"
          >
            {t('footer.privacyPolicy')}
          </button>
        </div>
      </div>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}
