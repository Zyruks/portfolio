import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import sentry from '@sentry/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zyruks.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sentry({
      dsn: 'https://42f10b1321e3c3795b0064f641a23ded@o4506869737193472.ingest.us.sentry.io/4506869738569728',
      sourceMapsUploadOptions: {
        project: 'javascript-astro',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
