import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap()
  ],
  site: 'https://synthesis.amotivv.ai',
  vite: {
    server: {
      allowedHosts: ['fork-node-01-1.tail855f01.ts.net', 'localhost']
    }
  }
});
