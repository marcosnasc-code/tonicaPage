/**
 * Fonte única de conteúdo da landing.
 *
 * Contatos, textos e FOTOS ficam neste arquivo.
 * Para trocar uma imagem: coloque o arquivo em `public/media/` e mude o `src`
 * (e width/height) do slot. `null` volta para a arte em CSS.
 * Cores: `src/styles/global.css` (`:root`).
 * Logotipo provisório: `src/components/Logo.astro` — não usar foto no lugar.
 *
 * TODO(placeholder) / TODO(confirmar) = dado fictício ou ainda não validado.
 * Não inventar telefone, e-mail, endereço, depoimento ou nome de cliente.
 */

export type Photo = {
  /** Caminho público. Ex.: "/media/nova-foto.webp" */
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Arquivo de baixa resolução: a página não estica. */
  provisional?: boolean;
};

export type ArtVariant = "wellness" | "feed" | "film" | "print" | "brand" | "note";

const photo = (
  src: string,
  width: number,
  height: number,
  alt: string,
  provisional = false,
): Photo => ({ src, width, height, alt, provisional });

/** Um objeto por arquivo. Retrato da fundadora é o mesmo slot no sobre e na equipe. */
const founderPhoto = photo(
  "/media/eduarda-herber.webp",
  1200,
  1500,
  "Retrato de Eduarda Herber, fundadora da Tônica Produtora, sorrindo de blazer xadrez.",
);

export const site = {
  name: "Tônica Produtora",
  shortName: "Tônica",
  category: "Design gráfico & audiovisual",
  location: "Santa Catarina",
  founder: "Eduarda Herber",

  seo: {
    title: "Tônica Produtora — design gráfico e audiovisual",
    description:
      "Identidade visual, conteúdo para redes, roteiro e audiovisual, apresentações e materiais offline. A Tônica Produtora busca a narrativa tônica da sua marca. Base em Santa Catarina.",
    ogAlt: "Tônica Produtora — a narrativa tônica da sua marca",
    locale: "pt_BR",
    // TODO: trocar para "index, follow" depois de substituir os contatos
    // de exemplo e definir o domínio em astro.config.mjs.
    robots: "noindex, nofollow",
  },

  cta: {
    label: "Solicite seu orçamento",
    short: "Orçamento",
    href: "https://tally.so/r/jaz8gY",
  },

  social: {
    instagram: "https://www.instagram.com/tonicaprodutora/",
    instagramHandle: "@tonicaprodutora",
  },

  contacts: {
    // TODO(placeholder): número fictício — trocar pelo WhatsApp real.
    whatsappDisplay: "+55 48 90000-0000",
    whatsappHref: "https://wa.me/5548900000000",
    whatsappNote: "Número de exemplo. TODO(placeholder)",
    // TODO(placeholder): e-mail fictício — trocar pelo e-mail real.
    email: "contato@exemplo.com",
    emailNote: "E-mail de exemplo. TODO(placeholder)",
  },

  nav: [
    { href: "#menus", label: "menus" },
    { href: "#portfolio", label: "portfólio" },
    { href: "#como-funciona", label: "processo" },
    { href: "#sobre", label: "sobre" },
    { href: "#novidades", label: "novidades" },
    { href: "#contato", label: "contato" },
  ],

  hero: {
    eyebrow: "Design gráfico & audiovisual",
    title: ["a narrativa", "tônica", "da sua marca."],
    accent: "com ponto de vista.",
    lead: "Em busca da história visual que a sua marca ainda não contou. Estética com opinião, roteiro com ritmo — de Santa Catarina para o feed, a tela e o impresso.",
    secondary: "ver portfólio",
    secondaryHref: "#portfolio",
    location: "Baseado em Santa Catarina",
    cardKicker: "cardápio",
    cardFoot: "escolhe um, ou pede a casa.",
    // FOTO do hero. Peça própria do Instagram ("estéticas obcecados").
    photo: photo(
      "/media/esteticas-obcecados.webp",
      1400,
      1750,
      "Cartaz com a frase estéticas obcecados em letras marrons sobre fundo creme, com estrelas mostarda.",
    ),
  },

  marquee: [
    "identidade visual",
    "design de conteúdo",
    "roteiro e audiovisual",
    "apresentações",
    "brindes",
    "santa catarina",
  ],

  menusIntro: {
    kicker: "cardápio",
    title: "o que são os menus?",
    // Rascunho de copy. O escopo de cada menu ainda não foi confirmado.
    lead: "No estúdio, os pacotes atendem por menu. Quatro caminhos, do logo ao brinde. Dá para pedir um só ou montar a combinação.",
  },

  menus: [
    {
      id: "menu-identidade",
      index: "01",
      short: "identidade visual",
      title: "identidade visual",
      summary:
        "Nome, forma, cor e o jeito de aparecer. O menu para a marca ficar reconhecível de longe.",
      includes: ["Logo e variações", "Cores, tipos e grafismos", "Guia rápido de uso"],
    },
    {
      id: "menu-conteudo",
      index: "02",
      short: "design de conteúdo",
      title: "design de conteúdo",
      summary:
        "O feed com estética obcecada: peças que conversam entre si, não um post solto no meio do caminho.",
      includes: [
        "Direção visual das redes",
        "Posts, carrosséis e capas",
        "Modelos para a marca continuar",
      ],
    },
    {
      id: "menu-audiovisual",
      index: "03",
      short: "roteiro & audiovisual",
      title: "roteiros & produção audiovisual",
      summary:
        "Da frase ao quadro. Vídeo com começo, meio e uma personalidade que não pede desculpa.",
      includes: ["Roteiro e mensagem", "Direção e produção", "Cortes para redes e campanhas"],
    },
    {
      id: "menu-offline",
      index: "04",
      short: "offline e brindes",
      title: "apresentações e materiais offline",
      summary: "O que sai da tela: deck, papelaria e brinde. A marca na mão de alguém.",
      includes: ["Apresentações e propostas", "Impressos e papelaria", "Brindes e peças de evento"],
    },
  ],

  portfolioIntro: {
    kicker: "trabalhos",
    title: "portfólio",
    lead: "Um projeto autoral, uma amostra de conteúdo sem nome de cliente, e um case ainda a confirmar. Onde não há arquivo, o card segue placeholder.",
  },

  portfolio: [
    {
      id: "tiny-tide",
      art: "brand" as ArtVariant,
      featured: true,
      title: "Tiny Tide",
      category: "identidade visual",
      summary:
        "Identidade fictícia de uma lojinha criativa. Projeto autoral — conceito, não é cliente da produtora.",
      badge: "projeto autoral",
      note: "Concept / projeto autoral. Não tratar como cliente real.",
      // FOTO principal, alta. FOTO do adesivo (detail) é baixa e provisória.
      image: photo(
        "/media/tiny-tide.webp",
        1400,
        1750,
        "Cartaz de identidade da Tiny Tide, lojinha criativa, com adesivos e lettering sobre fundo vinho. Projeto autoral, não é um cliente.",
      ),
      detail: photo(
        "/media/tiny-tide-mockup.webp",
        360,
        640,
        "Mockup provisório de um cartão de visita da Tiny Tide na tela de um notebook. Projeto autoral.",
        true,
      ),
    },
    {
      id: "posts-conteudo",
      art: "feed" as ArtVariant,
      featured: false,
      title: "Posts para redes",
      category: "design de conteúdo",
      summary:
        "Amostra de posts desenhados para redes sociais. Nenhum cliente é nomeado nesta página.",
      badge: "sem nome de cliente",
      note: "Não acrescentar nome de cliente sem autorização.",
      image: photo(
        "/media/posts-conteudo.webp",
        1400,
        1750,
        "Grade de posts para redes sociais em tons de creme, mostarda e vinho, sem nome de cliente.",
      ),
      detail: null,
    },
    {
      id: "plena-wellness",
      art: "wellness" as ArtVariant,
      featured: false,
      title: "Redesign Plena Wellness",
      category: "identidade visual",
      // TODO(confirmar com a cliente): título visto no Instagram público.
      summary:
        "Branding de um estúdio de pilates e wellness, publicado no Instagram da produtora. Ficha ainda provisória.",
      badge: "a confirmar",
      note: "TODO(confirmar com a cliente). Imagem provisória, baixa resolução.",
      image: photo(
        "/media/plena-wellness.webp",
        512,
        640,
        "Peça de redesign da Plena Wellness com lettering e uma pessoa em posição de pilates.",
        true,
      ),
      detail: null,
    },
    {
      id: "placeholder-av",
      art: "film" as ArtVariant,
      featured: false,
      title: "Peça audiovisual",
      category: "audiovisual",
      summary: "Espaço reservado para um trabalho real de roteiro ou filme.",
      badge: "placeholder",
      note: "TODO(placeholder)",
      image: null,
      detail: null,
    },
    {
      id: "placeholder-offline",
      art: "print" as ArtVariant,
      featured: false,
      title: "Materiais e brindes",
      category: "offline",
      summary: "Espaço reservado para uma peça real de impresso ou brinde.",
      badge: "placeholder",
      note: "TODO(placeholder)",
      image: null,
      detail: null,
    },
  ],

  processIntro: {
    kicker: "passo a passo",
    title: "como funciona",
    lead: "Quatro movimentos, sem formulário mistério. O orçamento em si começa no botão lá embaixo.",
  },

  process: [
    {
      index: "01",
      title: "a conversa",
      text: "Você conta a marca, o prazo e o que precisa acontecer.",
    },
    {
      index: "02",
      title: "o menu",
      text: "A gente indica um pacote ou monta uma combinação sob medida.",
    },
    {
      index: "03",
      title: "a produção",
      text: "Direção, peças e rodadas de ajuste até a estética fechar.",
    },
    {
      index: "04",
      title: "a entrega",
      text: "Arquivos, orientação de uso e o caminho do próximo passo, se houver.",
    },
  ],

  about: {
    kicker: "a casa",
    title: "sobre a tônica.",
    paragraphs: [
      "A Tônica Produtora faz design gráfico e audiovisual a partir de Santa Catarina. A fundadora é Eduarda Herber: identidade visual e conteúdo para redes.",
      "O ofício é achar a narrativa da marca e botar isso no logo, no feed, no vídeo e na peça que se entrega na mão.",
    ],
    pull: "estéticas obcecadas",
    pullAccent: "com método.",
    // FOTO da fundadora. Um caminho só — o círculo da equipe não repete o arquivo.
    portrait: founderPhoto,
    // FOTO de serviços, com ela na peça. Sem contato pessoal.
    services: photo(
      "/media/eduarda-servicos.webp",
      1080,
      1350,
      "Eduarda Herber em uma peça sobre os serviços da Tônica: redes sociais, identidade visual, apresentação e consultoria de mídias.",
    ),
    // FOTO de grupo, baixa. Não identifica as outras pessoas.
    teamSnap: photo(
      "/media/time-tonica.webp",
      512,
      640,
      "Colagem publicada no Instagram com três pessoas e o texto meet the team. Imagem provisória, em baixa resolução.",
      true,
    ),
    teamSnapNote:
      "Colagem provisória, baixa resolução. Só Eduarda Herber está identificada no site. TODO(placeholder) para a foto em alta e para os nomes de quem aparece junto.",
  },

  teamIntro: {
    title: "a equipe",
    note: "As outras cadeiras seguem sem nome e sem foto. A quantidade é ilustrativa. TODO(placeholder)",
  },

  team: [
    {
      id: "pessoa-2",
      name: "Nome a definir",
      role: "Função a definir",
      image: null,
      note: "TODO(placeholder)",
    },
    {
      id: "pessoa-3",
      name: "Nome a definir",
      role: "Função a definir",
      image: null,
      note: "TODO(placeholder)",
    },
  ],

  newsIntro: {
    kicker: "no ar",
    title: "novidades",
    lead: "Reels publicados no Instagram da casa. As capas estão em baixa resolução — entram aqui pequenas, até chegar o arquivo em alta. Evento e texto novo usam o card placeholder.",
  },

  news: [
    {
      id: "reel-eduarda",
      art: "note" as ArtVariant,
      badge: "reel",
      date: "Instagram",
      title: "Quem é a Eduarda",
      summary: "Capa de reel em que a fundadora se apresenta.",
      note: "Imagem provisória, baixa resolução. TODO(placeholder) trocar pela capa em alta.",
      image: photo(
        "/media/reel-eduarda.webp",
        360,
        640,
        "Capa de reel em que Eduarda Herber acena para a câmera, com a frase quem é a eduarda.",
        true,
      ),
    },
    {
      id: "reel-menus",
      art: "note" as ArtVariant,
      badge: "reel",
      date: "Instagram",
      title: "O que são os menus",
      summary: "Capa de reel sobre os pacotes da produtora.",
      note: "Imagem provisória, baixa resolução. TODO(placeholder) trocar pela capa em alta.",
      image: photo(
        "/media/reel-menus.webp",
        360,
        640,
        "Capa de reel com a pergunta o que são os menus da tônica, em um cartaz creme sobre fundo vinho.",
        true,
      ),
    },
    {
      id: "reel-time",
      art: "note" as ArtVariant,
      badge: "reel",
      date: "Instagram",
      title: "Meet the team",
      summary: "Capa de reel do time. Os nomes, fora o da fundadora, ainda não entram no site.",
      note: "Imagem provisória, baixa resolução. TODO(placeholder) trocar pela capa em alta.",
      image: photo(
        "/media/reel-time.webp",
        361,
        640,
        "Capa de reel com três pessoas e o texto meet the team. Imagem provisória.",
        true,
      ),
    },
    {
      id: "placeholder-novidade",
      art: "note" as ArtVariant,
      badge: "placeholder",
      date: "Data a definir",
      title: "Título da novidade",
      summary: "Quando houver uma data, um evento ou um texto, este card leva o conteúdo real.",
      note: "TODO(placeholder)",
      image: null,
    },
  ],

  faqIntro: {
    kicker: "antes de chamar",
    title: "dúvidas rápidas",
  },

  faq: [
    {
      q: "Como peço um orçamento?",
      a: "Pelo botão Solicite seu orçamento. O formulário é o caminho oficial e abre numa nova aba.",
    },
    {
      q: "Dá para contratar só um menu?",
      a: "Sim. Cada menu anda sozinho ou combinado com outro. A combinação fecha na conversa.",
    },
    {
      q: "Atendem fora de Santa Catarina?",
      a: "A base é Santa Catarina. Projeto fora do estado fica para combinar — o site não promete praça além disso.",
    },
    {
      q: "Os valores ficam no site?",
      a: "Não. O valor depende do menu e do escopo, e sai no orçamento. Não tem tabela publicada.",
    },
  ],

  contactIntro: {
    kicker: "bora",
    title: "solicite seu orçamento.",
    lead: "Conta o que a marca precisa. A conversa começa no formulário — leva poucos minutos.",
  },

  footer: {
    note: "Textos em revisão com a cliente. Contatos de exemplo marcados no bloco ao lado.",
  },
};
