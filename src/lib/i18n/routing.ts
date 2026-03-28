import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'nl', 'th'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
