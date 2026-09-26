import type { APIRoute } from 'astro';
import { absolute, fallbackLocale, htmlLang, locales, pageUrl, routes, type PageKey } from '../i18n/routes';

// Sitemap com as três versões de cada página ligadas por hreflang (slugs diferentes por idioma).
export const GET: APIRoute = () => {
  const urls = (Object.keys(routes) as PageKey[]).flatMap((page) =>
    locales.map((lang) => {
      const alternates = locales
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${absolute(pageUrl(page, l))}"/>`)
        .join('\n');
      return `  <url>
    <loc>${absolute(pageUrl(page, lang))}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(pageUrl(page, fallbackLocale))}"/>
  </url>`;
    }),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
