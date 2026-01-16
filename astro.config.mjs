import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://synthesis.site', // Update with actual domain
  vite: {
    server: {
      allowedHosts: ['fork-node-01-1.tail855f01.ts.net', 'localhost']
    }
  }
});
