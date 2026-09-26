# Milo Koffe — site institucional

Site da Milo Koffe, o primeiro café terapêutico do Brasil, nascido em Florianópolis. Serve dois públicos: investidores (página inicial e página própria) e hóspedes (cardápio digital aberto pelo QR code da mesa). Em três idiomas: português, inglês e espanhol.

Projeto da [UNAC Digital](https://github.com/unac-digital).

## Stack

- [Astro](https://astro.build) 7, saída estática
- Fontes auto-hospedadas via Fontsource (Onest, Righteous, Gochi Hand)
- Imagens otimizadas pelo `astro:assets` (AVIF/WebP responsivos)
- Deploy no GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321/milo-koffe/
npm run build    # gera dist/
npm run preview  # serve dist/
```

## Estrutura

| Caminho | O que é |
|---|---|
| `src/i18n/routes.ts` | Idiomas, URLs de cada página por idioma e helpers de caminho |
| `src/i18n/ui.ts` | Todos os textos do site em PT, EN e ES |
| `src/data/menu.ts` | Cardápio (itens, descrições traduzidas, preços em BRL) |
| `src/views/` | Página inicial, cardápio e página do investidor, compartilhadas pelos três idiomas |
| `src/pages/{pt,en,es}/` | Rotas localizadas |
| `src/pages/menu.astro` | `/menu`: destino do QR code; abre o cardápio no idioma do celular |
| `src/pages/sitemap.xml.ts` | Sitemap com `hreflang` entre as três versões |

URLs:

| Página | PT | EN | ES |
|---|---|---|---|
| Início | `/pt/` | `/en/` | `/es/` |
| Cardápio | `/pt/cardapio/` | `/en/menu/` | `/es/menu/` |
| Investidores | `/pt/investidores/` | `/en/investors/` | `/es/inversores/` |

A raiz `/` mostra a versão em português (canonical para `/pt/`) e sugere EN/ES pelo idioma do navegador, sem redirecionar.

## Domínio próprio

O preview roda em `https://unac-digital.github.io/milo-koffe/`. Com domínio próprio, faça o build com:

```bash
SITE_URL=https://milokoffe.com BASE_PATH=/ npm run build
```

(no GitHub Actions, defina essas variáveis no passo de build e configure o domínio em Settings → Pages).

## Pendências do cliente

Tudo que aparece entre colchetes no site é provisório:

- Cardápio completo (snacks, smoothies, refeições), preços finais e moeda
- E-mail, Instagram e contato para investidores
- Licença web das fontes da marca (CS Bredius e Folit). Hoje: Righteous e Gochi Hand como substitutas
- Fotos reais (as atuais vêm do brand book)
- Revisão nativa dos textos em inglês e espanhol
- Domínio e hospedagem definitivos
