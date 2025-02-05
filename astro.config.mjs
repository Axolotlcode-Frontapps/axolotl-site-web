import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [react(), astroI18next(), tailwind({ nesting: true })],
});
