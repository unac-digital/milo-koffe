// @ts-check
import { defineConfig } from 'astro/config';

// Preview no GitHub Pages: https://unac-digital.github.io/milo-koffe/
// Com domínio próprio, defina SITE_URL (ex.: https://milokoffe.com) e BASE_PATH=/ no build.
const site = process.env.SITE_URL ?? 'https://unac-digital.github.io';
const base = process.env.BASE_PATH ?? '/milo-koffe';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
