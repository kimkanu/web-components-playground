import { type Plugin } from "vite";
import fs from "node:fs";

export function customLitElementFOUCPlugin(directory: string): Plugin {
  const tagNames = fs
    .readdirSync(directory)
    .filter((x) => x.match(/\.(js|ts)$/))
    .map((x) => x.replace(/\.(js|ts)$/, ""));

  return {
    name: "@kimkanu/vite-plugin-custom-lit-element-fouc",
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return {
          html,
          tags: [
            {
              tag: "style",
              children: tagNames
                .map(
                  (tagName) => `
                ${tagName} {
                    height: 100%;
                }
                ${tagName}:not(:defined) {
                    opacity: 0;
                }
                `
                )
                .join("\n"),
              injectTo: "head-prepend",
            },
          ],
        };
      },
    },
  };
}
