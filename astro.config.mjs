import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.axolotlcode.tech/',
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    react(),
    astroI18next(),
    tailwind({ nesting: true }),
    sitemap({
      canonicalURL: 'https://www.axolotlcode.tech/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
  ],
});
