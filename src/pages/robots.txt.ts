import type { APIRoute } from 'astro';
import { absolute, withBase } from '../i18n/routes';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absolute(withBase('sitemap.xml'))}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
