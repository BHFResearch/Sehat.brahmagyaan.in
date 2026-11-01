import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sehat.brahmagyaan.in',
  output: 'static',
  integrations: [sitemap()],
});