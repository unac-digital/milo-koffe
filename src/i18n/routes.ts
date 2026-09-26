export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
export const ogLocale: Record<Locale, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
export const localeNames: Record<Locale, string> = { pt: 'Português', en: 'English', es: 'Español' };

/** Idioma servido a quem não fala nenhum dos três (hreflang x-default). */
export const fallbackLocale: Locale = 'en';

export type PageKey = 'home' | 'menu' | 'investors';

/** Caminho de cada página em cada idioma, relativo à base do site. */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { pt: 'pt/', en: 'en/', es: 'es/' },
  menu: { pt: 'pt/cardapio/', en: 'en/menu/', es: 'es/menu/' },
  investors: { pt: 'pt/investidores/', en: 'en/investors/', es: 'es/inversores/' },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Caminho absoluto a partir da raiz do domínio, já com a base do deploy. */
export function withBase(path = ''): string {
  return `${base}/${path.replace(/^\//, '')}`;
}

export function pageUrl(page: PageKey, lang: Locale): string {
  return withBase(routes[page][lang]);
}

export function absolute(path: string): string {
  return new URL(path, import.meta.env.SITE).href;
}
