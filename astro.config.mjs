// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://yiromaric.fr",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
        "@pages": path.resolve("./src/pages"),
        "@utils": path.resolve("./src/utils"),
        "@assets": path.resolve("./src/assets"),
        "@styles": path.resolve("./src/styles"),
        "@types": path.resolve("./src/types"),
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
