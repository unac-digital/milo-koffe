import type { Locale } from '../i18n/routes';

/*
 * Cardápio PROVISÓRIO, montado a partir dos mockups do brand book.
 * Preços em reais (BRL) são ilustrativos; `null` = preço ainda não informado.
 * Estruturado para receber pedido online no futuro (id estável por item).
 */

type Text = Record<Locale, string>;

export interface MenuItem {
  id: string;
  /** Nome original, em inglês, igual em todos os idiomas. */
  name: string;
  description: Text | null;
  price: number | null;
}

export interface MenuCategory {
  id: 'coffee' | 'snacks' | 'smoothies' | 'meals';
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'coffee',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: { pt: 'Intenso e encorpado.', en: 'Intense and full-bodied.', es: 'Intenso y con cuerpo.' },
        price: 6,
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: { pt: 'Cremoso e equilibrado.', en: 'Creamy and balanced.', es: 'Cremoso y equilibrado.' },
        price: 8,
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: { pt: 'Suave e elegante.', en: 'Smooth and elegant.', es: 'Suave y elegante.' },
        price: 9,
      },
      {
        id: 'latte',
        name: 'Latte',
        description: { pt: 'Leve e aveludado.', en: 'Light and velvety.', es: 'Ligero y aterciopelado.' },
        price: 9,
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: { pt: 'Chocolate e café.', en: 'Chocolate and coffee.', es: 'Chocolate y café.' },
        price: 10,
      },
      { id: 'cold-brew', name: 'Cold Brew', description: null, price: null },
    ],
  },
  { id: 'snacks', items: [] },
  { id: 'smoothies', items: [] },
  { id: 'meals', items: [] },
];

export const houseBlend = {
  id: 'house-blend',
  name: 'House Blend',
  weight: '340 g',
  price: null as number | null,
  description: {
    pt: '100% arábica: Brasil, Colômbia e Etiópia. Torra média, com notas de chocolate, castanhas e caramelo.',
    en: '100% Arabica from Brazil, Colombia and Ethiopia. Medium roast with notes of chocolate, nuts and caramel.',
    es: '100% arábica de Brasil, Colombia y Etiopía. Tueste medio con notas de chocolate, frutos secos y caramelo.',
  } satisfies Text,
};

const priceLocale: Record<Locale, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-AR' };

export function formatPrice(value: number, lang: Locale): string {
  return new Intl.NumberFormat(priceLocale[lang], { style: 'currency', currency: 'BRL' }).format(value);
}
