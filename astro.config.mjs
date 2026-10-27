import { defineConfig } from "astro/config";

// Site estático, sem adapter. Na hora de publicar na Vercel ou Netlify,
// o build de `dist/` sobe sem configuração extra.
//
// TODO(placeholder): quando existir domínio, defina `site` com a URL absoluta
// (ex.: "https://tonicaprodutora.com.br") para canonical e Open Graph absolutos.
export default defineConfig({
  compressHTML: true,
});
