import { resolve } from "path";
import { defineConfig } from "vite";
import noBundlePlugin from "vite-plugin-no-bundle";
import { createHtmlPlugin } from "vite-plugin-html";
import { customLitElementFOUCPlugin } from "./plugins/custom-lit-element-fouc";
import { importMapsPlugin } from "./plugins/import-maps";
import { resetCSSPlugin } from "./plugins/reset-css";
import importMap from "./import_map.json" assert { type: "json" };

export default defineConfig({
  appType: "mpa",
  plugins: [
    {
      name: "rewrite-middleware",
      configureServer(serve) {
        serve.middlewares.use((req, _, next) => {
          if (
            !req.originalUrl?.includes("/@vite") &&
            req.originalUrl?.match(/\/[^.]+\/?$/)
          ) {
            req.url = req.originalUrl.replace(/\/?$/g, "/index.html");
          }
          next();
        });
      },
    },
    noBundlePlugin({
      fileNames: "[name].js",
    }),
    importMapsPlugin(importMap),
    customLitElementFOUCPlugin("src/components"),
    resetCSSPlugin(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      preserveEntrySignatures: "allow-extension",
      input: {
        main: resolve(__dirname, "index.html"),
        subdir: resolve(__dirname, "subdir/index.html"),
      },
    },
  },
});
