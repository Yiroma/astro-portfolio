// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
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
    build: {
      minify: "esbuild",
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "react";
              if (id.includes("@astrojs")) return "astro";
              return "vendor";
            }
          },
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
        },
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
