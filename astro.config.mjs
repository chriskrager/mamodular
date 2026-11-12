import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import externalLinks from './integrations/external-links.mjs';

export default defineConfig({
  site: 'https://www.mamodular.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') && !page.includes('/finish-board/') }), externalLinks()],
});
