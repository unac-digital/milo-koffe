import type { Locale } from './routes';

/*
 * Textos do site. PT é a fonte; EN e ES são primeira versão e precisam de revisão nativa.
 * Tudo entre colchetes é pendência do cliente (contato, preços) e não deve ir ao ar como está.
 */
const pt = {
  meta: {
    siteName: 'Milo Koffe',
    homeTitle: 'Milo Koffe — O primeiro café terapêutico do Brasil',
    homeDescription:
      'Nascida em Florianópolis, a Milo Koffe é um café terapêutico que funciona dentro de hostels, pousadas e hotéis: cafés especiais, snacks nutritivos, smoothies e refeições leves.',
    menuTitle: 'Cardápio — Milo Koffe',
    menuDescription:
      'Cardápio da Milo Koffe em português, inglês e espanhol: cafés especiais, snacks nutritivos, smoothies e refeições leves.',
    investorsTitle: 'Para investidores — Milo Koffe',
    investorsDescription:
      'Conheça o modelo de negócio da Milo Koffe, o primeiro café terapêutico do Brasil, que funciona dentro da hospitalidade de Florianópolis.',
    notFoundTitle: 'Página não encontrada — Milo Koffe',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    home: 'Milo Koffe, página inicial',
    mainNav: 'Principal',
    footerNav: 'Rodapé',
    language: 'Idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    categories: 'Categorias do cardápio',
  },
  nav: { concept: 'Conceito', menu: 'Cardápio', investors: 'Investidores' },
  hero: {
    title: 'O primeiro café terapêutico do Brasil.',
    sub: 'Nascida em Florianópolis para desacelerar quem está de passagem.',
    cta: 'Conheça o negócio',
    menu: 'Ver cardápio',
    note: 'desacelera. o café já vem.',
    alt: 'Mulher tomando café num terraço de frente para o mar em Florianópolis',
  },
  manifesto: [
    'No ritmo acelerado do dia a dia, a rotina consome o nosso tempo e a nossa energia.',
    'A Milo Koffe é um convite para desacelerar:',
    'cafés especiais, snacks nutritivos, smoothies e refeições leves que cuidam do corpo e da mente.',
  ],
  model: {
    title: 'Um café dentro da pousada.',
    body: 'A Milo Koffe funciona dentro de hostels, pousadas e hotéis de Florianópolis, onde o viajante já está. A casa ganha um café com identidade própria. O hóspede ganha uma pausa.',
    steps: [
      { title: 'A casa recebe', text: 'A Milo Koffe se instala no hostel, na pousada ou no hotel.' },
      { title: 'O hóspede escaneia', text: 'O QR code da mesa abre o cardápio no idioma do celular.' },
      { title: 'A Milo serve', text: 'No balcão ou na mesa. Em breve, com pedido direto pelo celular.' },
    ],
    link: 'Entenda o modelo',
    alt: 'Avental verde e copo verde com o logo da Milo Koffe',
  },
  serve: {
    title: 'Para o corpo e para a mente.',
    coffeeList: 'Espresso, cappuccino, flat white, latte, mocha, cold brew',
    cta: 'Ver cardápio completo',
    languages: 'Em português, inglês e espanhol',
    alt: 'Mãos segurando grãos de café torrados sobre uma saca de juta',
  },
  categories: { coffee: 'Cafés especiais', snacks: 'Snacks nutritivos', smoothies: 'Smoothies', meals: 'Refeições leves' },
  brand: {
    title: 'Uma marca pronta para cada nova casa.',
    body: 'Do copo ao avental, da embalagem ao boné: a identidade da Milo Koffe foi desenhada para chegar inteira a cada novo endereço.',
    alts: {
      cups: 'Copos verdes da Milo Koffe',
      cup: 'Copo verde com o logo da Milo Koffe na mão de um cliente',
      box: 'Caixa marrom de lanche com o logo da Milo Koffe',
      merch: 'Boné e ecobag verdes com o logo da Milo Koffe',
    },
  },
  floripa: {
    title: 'Nascida em Florianópolis.',
    body: 'Numa cidade onde o flow dita um estilo de vida guiado pela leveza, pela tranquilidade e por uma forma de enxergar o mundo com mais calma.',
    note: 'da ilha para quem chega.',
    alt: 'Homem de bicicleta na orla tomando café',
  },
  close: {
    title: 'Leve a Milo Koffe para a sua casa.',
    body: 'Conheça o modelo de negócio e converse com a gente sobre levar a Milo Koffe a novos endereços.',
    cta: 'Área do investidor',
    talk: 'Fale com a gente',
  },
  investors: {
    title: 'A Milo Koffe como negócio.',
    sub: 'O primeiro café terapêutico do Brasil, pensado para funcionar dentro da hospitalidade de Florianópolis.',
    conceptTitle: 'Um café que vende calma.',
    conceptBody: [
      'Mais do que um negócio de alimentação saudável, a Milo Koffe nasce com um pioneirismo transformador no mercado nacional: é o primeiro café terapêutico do Brasil.',
      'A marca traduz em cada detalhe o equilíbrio entre saúde, bem-estar e praticidade, com cafés especiais, snacks nutritivos, smoothies e refeições leves que cuidam tanto do corpo quanto da mente.',
    ],
    pillars: ['Saúde', 'Bem-estar', 'Praticidade'],
    modelTitle: 'Onde o viajante já está.',
    modelBody:
      'A Milo Koffe opera dentro de hostels, pousadas e hotéis frequentados por viajantes do mundo todo. O cardápio fala português, inglês e espanhol, e o pedido acontece no balcão, na mesa e, em breve, pelo celular.',
    valueTitle: 'Bom para todos os lados da mesa.',
    values: [
      { title: 'Para a casa', text: 'Um café com identidade própria dentro do espaço, que valoriza a experiência do hóspede.' },
      { title: 'Para o hóspede', text: 'Uma pausa de verdade, com um cardápio no próprio idioma.' },
      { title: 'Para a marca', text: 'Uma identidade completa, pronta para ser levada a cada novo endereço.' },
    ],
    contactTitle: 'Vamos conversar.',
    contactBody:
      'Se você quer investir na Milo Koffe ou levá-la para o seu hostel, pousada ou hotel, fale com a gente.',
    contactPending: '[contato a confirmar]',
    alt: 'Avental verde da Milo Koffe',
  },
  menu: {
    title: 'Cardápio',
    note: 'sem pressa.',
    provisional: 'Cardápio provisório: itens e preços a confirmar.',
    order: 'Peça no balcão. Em breve, pedidos pelo celular.',
    takeHome: 'para levar pra casa',
    beans: 'em grãos',
    pricePending: '[preço]',
    soon: 'em breve por aqui.',
    pending: 'Os itens ainda serão confirmados pela Milo Koffe.',
    about: 'Conheça a Milo Koffe',
  },
  footer: {
    navigation: 'Navegação',
    contact: 'Contato',
    language: 'Idioma',
    emailPending: '[e-mail a confirmar]',
    instagramPending: '[Instagram a confirmar]',
    city: 'Florianópolis, SC',
  },
  suggest: { text: 'Esta página também está em português.', action: 'Ver em português', dismiss: 'Fechar' },
  notFound: { title: 'Essa página se perdeu no caminho.', body: 'Volte para o início e comece com calma.', cta: 'Ir para o início' },
};

export type UI = typeof pt;

const en: UI = {
  meta: {
    siteName: 'Milo Koffe',
    homeTitle: 'Milo Koffe — Brazil’s first therapeutic café',
    homeDescription:
      'Born in Florianópolis, Milo Koffe is a therapeutic café inside hostels, guesthouses and hotels: specialty coffee, nourishing snacks, smoothies and light meals.',
    menuTitle: 'Menu — Milo Koffe',
    menuDescription:
      'The Milo Koffe menu in English, Portuguese and Spanish: specialty coffee, nourishing snacks, smoothies and light meals.',
    investorsTitle: 'For investors — Milo Koffe',
    investorsDescription:
      'Discover the business model of Milo Koffe, Brazil’s first therapeutic café, operating inside Florianópolis hospitality venues.',
    notFoundTitle: 'Page not found — Milo Koffe',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Milo Koffe, home page',
    mainNav: 'Main',
    footerNav: 'Footer',
    language: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    categories: 'Menu categories',
  },
  nav: { concept: 'Concept', menu: 'Menu', investors: 'Investors' },
  hero: {
    title: 'Brazil’s first therapeutic café.',
    sub: 'Born in Florianópolis to help travelers slow down.',
    cta: 'Discover the business',
    menu: 'See the menu',
    note: 'slow down. your coffee is coming.',
    alt: 'Woman drinking coffee on a terrace overlooking the sea in Florianópolis',
  },
  manifesto: [
    'In the rush of everyday life, routine eats up our time and our energy.',
    'Milo Koffe is an invitation to slow down:',
    'specialty coffee, nourishing snacks, smoothies and light meals that care for body and mind.',
  ],
  model: {
    title: 'A café inside the guesthouse.',
    body: 'Milo Koffe operates inside hostels, guesthouses and hotels in Florianópolis, right where travelers already are. The venue gains a café with its own identity. The guest gains a pause.',
    steps: [
      { title: 'The venue hosts', text: 'Milo Koffe sets up inside the hostel, guesthouse or hotel.' },
      { title: 'The guest scans', text: 'The QR code on the table opens the menu in the phone’s language.' },
      { title: 'Milo serves', text: 'At the counter or at the table. Soon, with ordering straight from your phone.' },
    ],
    link: 'How the model works',
    alt: 'Green apron and green cup with the Milo Koffe logo',
  },
  serve: {
    title: 'For body and mind.',
    coffeeList: 'Espresso, cappuccino, flat white, latte, mocha, cold brew',
    cta: 'See the full menu',
    languages: 'In English, Portuguese and Spanish',
    alt: 'Hands holding roasted coffee beans over a burlap sack',
  },
  categories: { coffee: 'Specialty coffee', snacks: 'Nourishing snacks', smoothies: 'Smoothies', meals: 'Light meals' },
  brand: {
    title: 'A brand ready for every new venue.',
    body: 'From the cup to the apron, from the packaging to the cap: the Milo Koffe identity was designed to arrive whole at every new address.',
    alts: {
      cups: 'Green Milo Koffe cups',
      cup: 'Green cup with the Milo Koffe logo in a customer’s hand',
      box: 'Brown snack box with the Milo Koffe logo',
      merch: 'Green cap and tote bag with the Milo Koffe logo',
    },
  },
  floripa: {
    title: 'Born in Florianópolis.',
    body: 'A city where the flow sets a way of life guided by lightness, tranquility and a calmer way of seeing the world.',
    note: 'from the island to every traveler.',
    alt: 'Man riding a bike along the beach while drinking coffee',
  },
  close: {
    title: 'Bring Milo Koffe to your venue.',
    body: 'Learn about the business model and talk to us about bringing Milo Koffe to new addresses.',
    cta: 'For investors',
    talk: 'Talk to us',
  },
  investors: {
    title: 'Milo Koffe as a business.',
    sub: 'Brazil’s first therapeutic café, designed to operate inside Florianópolis hospitality.',
    conceptTitle: 'A café that serves calm.',
    conceptBody: [
      'More than a healthy food business, Milo Koffe brings something new to the Brazilian market: it is the country’s first therapeutic café.',
      'Every detail of the brand balances health, wellbeing and convenience, with specialty coffee, nourishing snacks, smoothies and light meals that care for both body and mind.',
    ],
    pillars: ['Health', 'Wellbeing', 'Convenience'],
    modelTitle: 'Where travelers already are.',
    modelBody:
      'Milo Koffe operates inside hostels, guesthouses and hotels visited by travelers from all over the world. The menu speaks English, Portuguese and Spanish, and orders happen at the counter, at the table and, soon, on the guest’s phone.',
    valueTitle: 'Good for every side of the table.',
    values: [
      { title: 'For the venue', text: 'A café with its own identity inside the space, adding to the guest experience.' },
      { title: 'For the guest', text: 'A real pause, with a menu in their own language.' },
      { title: 'For the brand', text: 'A complete identity, ready to be taken to every new address.' },
    ],
    contactTitle: 'Let’s talk.',
    contactBody:
      'If you would like to invest in Milo Koffe or bring it to your hostel, guesthouse or hotel, get in touch.',
    contactPending: '[contact to be confirmed]',
    alt: 'Green Milo Koffe apron',
  },
  menu: {
    title: 'Menu',
    note: 'take your time.',
    provisional: 'Preview menu: items and prices to be confirmed.',
    order: 'Order at the counter. Ordering from your phone is coming soon.',
    takeHome: 'to take home',
    beans: 'whole beans',
    pricePending: '[price]',
    soon: 'coming soon.',
    pending: 'Milo Koffe will confirm these items soon.',
    about: 'Discover Milo Koffe',
  },
  footer: {
    navigation: 'Navigation',
    contact: 'Contact',
    language: 'Language',
    emailPending: '[email to be confirmed]',
    instagramPending: '[Instagram to be confirmed]',
    city: 'Florianópolis, Brazil',
  },
  suggest: { text: 'This page is also available in English.', action: 'Switch to English', dismiss: 'Close' },
  notFound: { title: 'This page wandered off.', body: 'Head back home and take it slow.', cta: 'Go to the home page' },
};

const es: UI = {
  meta: {
    siteName: 'Milo Koffe',
    homeTitle: 'Milo Koffe — El primer café terapéutico de Brasil',
    homeDescription:
      'Nacida en Florianópolis, Milo Koffe es un café terapéutico dentro de hostels, posadas y hoteles: cafés de especialidad, snacks nutritivos, smoothies y comidas ligeras.',
    menuTitle: 'Menú — Milo Koffe',
    menuDescription:
      'El menú de Milo Koffe en español, portugués e inglés: cafés de especialidad, snacks nutritivos, smoothies y comidas ligeras.',
    investorsTitle: 'Para inversores — Milo Koffe',
    investorsDescription:
      'Conozca el modelo de negocio de Milo Koffe, el primer café terapéutico de Brasil, que funciona dentro de la hotelería de Florianópolis.',
    notFoundTitle: 'Página no encontrada — Milo Koffe',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Milo Koffe, página de inicio',
    mainNav: 'Principal',
    footerNav: 'Pie de página',
    language: 'Idioma',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    categories: 'Categorías del menú',
  },
  nav: { concept: 'Concepto', menu: 'Menú', investors: 'Inversores' },
  hero: {
    title: 'El primer café terapéutico de Brasil.',
    sub: 'Nacida en Florianópolis para que quien está de paso baje el ritmo.',
    cta: 'Conozca el negocio',
    menu: 'Ver el menú',
    note: 'tranquilo. tu café ya viene.',
    alt: 'Mujer tomando café en una terraza frente al mar en Florianópolis',
  },
  manifesto: [
    'En el ritmo acelerado del día a día, la rutina consume nuestro tiempo y nuestra energía.',
    'Milo Koffe es una invitación a bajar el ritmo:',
    'cafés de especialidad, snacks nutritivos, smoothies y comidas ligeras que cuidan el cuerpo y la mente.',
  ],
  model: {
    title: 'Un café dentro de la posada.',
    body: 'Milo Koffe funciona dentro de hostels, posadas y hoteles de Florianópolis, justo donde ya está el viajero. El espacio gana un café con identidad propia. El huésped gana una pausa.',
    steps: [
      { title: 'El espacio recibe', text: 'Milo Koffe se instala en el hostel, la posada o el hotel.' },
      { title: 'El huésped escanea', text: 'El código QR de la mesa abre el menú en el idioma del celular.' },
      { title: 'Milo sirve', text: 'En el mostrador o en la mesa. Muy pronto, con pedidos desde el celular.' },
    ],
    link: 'Cómo funciona el modelo',
    alt: 'Delantal verde y vaso verde con el logo de Milo Koffe',
  },
  serve: {
    title: 'Para el cuerpo y la mente.',
    coffeeList: 'Espresso, cappuccino, flat white, latte, mocha, cold brew',
    cta: 'Ver el menú completo',
    languages: 'En español, portugués e inglés',
    alt: 'Manos sosteniendo granos de café tostado sobre un saco de yute',
  },
  categories: { coffee: 'Cafés de especialidad', snacks: 'Snacks nutritivos', smoothies: 'Smoothies', meals: 'Comidas ligeras' },
  brand: {
    title: 'Una marca lista para cada nuevo espacio.',
    body: 'Del vaso al delantal, del empaque a la gorra: la identidad de Milo Koffe fue diseñada para llegar completa a cada nueva dirección.',
    alts: {
      cups: 'Vasos verdes de Milo Koffe',
      cup: 'Vaso verde con el logo de Milo Koffe en la mano de un cliente',
      box: 'Caja marrón para snacks con el logo de Milo Koffe',
      merch: 'Gorra y bolsa de tela verdes con el logo de Milo Koffe',
    },
  },
  floripa: {
    title: 'Nacida en Florianópolis.',
    body: 'Una ciudad donde el flow marca un estilo de vida guiado por la ligereza, la tranquilidad y una forma más calmada de ver el mundo.',
    note: 'de la isla para quien llega.',
    alt: 'Hombre en bicicleta por la costanera tomando café',
  },
  close: {
    title: 'Lleve Milo Koffe a su espacio.',
    body: 'Conozca el modelo de negocio y hable con nosotros sobre llevar Milo Koffe a nuevas direcciones.',
    cta: 'Para inversores',
    talk: 'Hable con nosotros',
  },
  investors: {
    title: 'Milo Koffe como negocio.',
    sub: 'El primer café terapéutico de Brasil, pensado para funcionar dentro de la hotelería de Florianópolis.',
    conceptTitle: 'Un café que sirve calma.',
    conceptBody: [
      'Más que un negocio de alimentación saludable, Milo Koffe llega como pionera al mercado brasileño: es el primer café terapéutico del país.',
      'Cada detalle de la marca equilibra salud, bienestar y practicidad, con cafés de especialidad, snacks nutritivos, smoothies y comidas ligeras que cuidan tanto el cuerpo como la mente.',
    ],
    pillars: ['Salud', 'Bienestar', 'Practicidad'],
    modelTitle: 'Donde ya está el viajero.',
    modelBody:
      'Milo Koffe opera dentro de hostels, posadas y hoteles que reciben viajeros de todo el mundo. El menú habla español, portugués e inglés, y el pedido se hace en el mostrador, en la mesa y, muy pronto, desde el celular.',
    valueTitle: 'Bueno para todos los lados de la mesa.',
    values: [
      { title: 'Para el espacio', text: 'Un café con identidad propia dentro del lugar, que suma a la experiencia del huésped.' },
      { title: 'Para el huésped', text: 'Una pausa de verdad, con un menú en su propio idioma.' },
      { title: 'Para la marca', text: 'Una identidad completa, lista para llegar a cada nueva dirección.' },
    ],
    contactTitle: 'Conversemos.',
    contactBody:
      'Si quiere invertir en Milo Koffe o llevarla a su hostel, posada u hotel, escríbanos.',
    contactPending: '[contacto por confirmar]',
    alt: 'Delantal verde de Milo Koffe',
  },
  menu: {
    title: 'Menú',
    note: 'sin prisa.',
    provisional: 'Menú provisional: productos y precios por confirmar.',
    order: 'Pida en el mostrador. Muy pronto, pedidos desde el celular.',
    takeHome: 'para llevar a casa',
    beans: 'en grano',
    pricePending: '[precio]',
    soon: 'muy pronto.',
    pending: 'Milo Koffe confirmará los productos pronto.',
    about: 'Conozca Milo Koffe',
  },
  footer: {
    navigation: 'Navegación',
    contact: 'Contacto',
    language: 'Idioma',
    emailPending: '[e-mail por confirmar]',
    instagramPending: '[Instagram por confirmar]',
    city: 'Florianópolis, Brasil',
  },
  suggest: { text: 'Esta página también está en español.', action: 'Ver en español', dismiss: 'Cerrar' },
  notFound: { title: 'Esta página se perdió en el camino.', body: 'Vuelva al inicio y empiece con calma.', cta: 'Ir al inicio' },
};

export const ui: Record<Locale, UI> = { pt, en, es };

export function t(lang: Locale): UI {
  return ui[lang];
}
