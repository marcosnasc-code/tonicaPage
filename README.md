# Tônica Produtora

Landing page da [Tônica Produtora](https://www.instagram.com/tonicaprodutora/) — design gráfico e audiovisual, com base em Santa Catarina. Esta é a estrutura inicial: página estática para gerar pedidos de orçamento, mostrar serviços (os “menus”), portfólio e um espaço de novidades.

Os textos são um primeiro rascunho para a cliente aprovar. Contatos, equipe, notícias e a maior parte do portfólio são placeholders.

## Stack

[Astro](https://astro.build/) 7, sem framework de UI e sem CSS de terceiro. A página sai como HTML estático (`dist/`), com CSS próprio e nenhuma ilha de JavaScript — o menu, o FAQ e o carrossel são HTML e CSS.

Astro encaixa neste projeto porque o site é institucional, precisa de HTML semântico e SEO básico, e deve ficar leve para hospedar depois na Vercel ou na Netlify sem adapter. O conteúdo editável mora em um arquivo só.

Fontes via Google Fonts (licença OFL): **Big Shoulders Display** (títulos condensados), **Instrument Serif** (acentos em itálico) e **Outfit** (texto).

## Requisitos

- Node.js `>= 22.23.4`
- npm 9+

## Rodar localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

O `build` gera `dist/`. O `preview` serve essa pasta para conferir a versão de produção.

## Onde editar

| O que | Onde |
| --- | --- |
| Contatos, CTA, textos, menus, portfólio, FAQ, equipe, novidades | [`src/data/site.ts`](src/data/site.ts) |
| Fotos de cada slot | `src` em `src/data/site.ts` e o arquivo em [`public/media/`](public/media/) |
| Cores e tipografia | [`src/styles/global.css`](src/styles/global.css), bloco `:root` |
| Logotipo provisório | [`src/components/Logo.astro`](src/components/Logo.astro) |
| Favicon e imagem de compartilhamento | [`public/favicon.svg`](public/favicon.svg), `public/og.png` |
| Indexação e URL do site | `seo.robots` em `site.ts` e `site` em [`astro.config.mjs`](astro.config.mjs) |

Não espalhar telefone, e-mail ou link novo em componente. Tudo isso sai de `src/data/site.ts`.

### Trocar uma foto

Cada slot (hero, cards do portfólio, retrato, equipe, novidades) tem um objeto com `src`, `width`, `height` e `alt`. `null` mostra a arte em CSS.

1. Coloque o arquivo novo em `public/media/` (de preferência WebP, já no tamanho de exibição).
2. Aponte o `src` daquele slot em `src/data/site.ts` e atualize `width` e `height`.
3. Marque `provisional: true` se o arquivo for baixa resolução — o layout não estica essas imagens.

O retrato da Eduarda Herber é o objeto `founderPhoto` (slot do sobre). O logotipo não é foto: continua o círculo em CSS até chegar o vetor.

### Cores

Valores aproximados do Instagram, ainda sem manual de marca:

| Token | Hex | Uso |
| --- | --- | --- |
| `--mustard` | `#F2A83B` | fundos, marcações, sombra dos botões |
| `--burgundy` | `#5A1E14` | texto, fundos escuros, botão principal |
| `--cream` | `#FFF6E3` | fundo da página |
| `--teal` | `#1F6F78` | acento pontual (itálico, foco, categorias) |

Mostarda em cima de creme não tem contraste para texto. Por isso a mostarda entra como faixa, marcação atrás da palavra ou sombra — o texto fica no vinho ou no creme.

## Placeholders pendentes da cliente

Itens com `TODO(placeholder)` ou `TODO(confirmar)` no código. Não publicar como se fossem dados reais.

1. **Logotipo vetorial oficial.** O círculo mostarda com “TÔN / ICA” é uma reconstrução em CSS. Trocar em `Logo.astro` e refazer favicon e `og.png`.
2. **WhatsApp** `+55 48 90000-0000` — número fictício.
3. **E-mail** `contato@exemplo.com` — domínio de exemplo.
4. **Case Redesign Plena Wellness** — o título aparece no Instagram. Falta confirmar a ficha. A imagem atual é baixa e está marcada como provisória.
5. **Cards sem foto** — peça audiovisual e materiais/brindes.
6. **Equipe além da fundadora** — Eduarda Herber está nomeada. As outras cadeiras não têm nome nem foto. A colagem “meet the team” é provisória e não identifica as outras pessoas.
7. **Novidade de evento/texto** — um card placeholder segue vazio. As outras três entradas são capas de reel.
8. **Destaque “a dose”** do Instagram — o significado não está neste site de propósito, até a cliente explicar.
9. **Escopo de cada menu** — a lista do que entra em identidade, conteúdo, audiovisual e offline é rascunho.
10. **Copy no geral** — tom e frases para aprovação.
11. **Domínio** — quando existir, preencher `site` em `astro.config.mjs` e trocar `seo.robots` para `"index, follow"`. Hoje a página pede `noindex, nofollow` para o telefone de exemplo não ir para o Google.
12. **Paleta final** — os hex são aproximação visual do perfil, não um brand book.
13. **Tiny Tide** é projeto autoral / conceito (identidade fictícia). Não transformar em cliente real. O mockup do cartão é baixa resolução.

### Imagens provisórias (baixa resolução — trocar pela alta)

Usadas só em tamanho pequeno:

- `public/media/plena-wellness.webp` (512×640) — card Plena Wellness
- `public/media/tiny-tide-mockup.webp` (360×640) — adesivo do projeto autoral Tiny Tide
- `public/media/reel-eduarda.webp` (360×640) — novidades
- `public/media/reel-menus.webp` (360×640) — novidades
- `public/media/reel-time.webp` (361×640) — novidades
- `public/media/time-tonica.webp` (512×640) — colagem da equipe

Arquivos em alta já otimizados para a web: hero (`esteticas-obcecados.webp`), retrato (`eduarda-herber.webp`), serviços (`eduarda-servicos.webp`), Tiny Tide (`tiny-tide.webp`) e posts (`posts-conteudo.webp`).

Links reais já usados:

- Orçamento: https://tally.so/r/jaz8gY
- Instagram: https://www.instagram.com/tonicaprodutora/

## Publicar depois

Não há domínio nem hospedagem configurados. Quando for a hora:

1. Trocar os placeholders da lista acima.
2. Definir `site` em `astro.config.mjs`.
3. `npm run build`.
4. Na Vercel ou Netlify, apontar o projeto para este repositório. As duas leem o Astro sem adapter: o output é a pasta `dist/`.

## Acessibilidade

HTML semântico em `pt-BR`, um `h1`, link de pular conteúdo, foco visível, alvos de toque de 44px e respeito a `prefers-reduced-motion`. A página foi pensada para ~375px e ~1440px.
