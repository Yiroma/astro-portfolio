// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://yiromaric.fr",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@utils": "/src/utils",
        "@assets": "/src/assets",
        "@styles": "/src/styles",
        "@types": "/src/types",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "never",
    assets: "_astro",
  },
  server: {
    host: true,
    port: 4321,
  },
  compressHTML: true,
});
