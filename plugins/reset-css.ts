import { type Plugin } from "vite";

export function resetCSSPlugin(): Plugin {
  return {
    name: "@kimkanu/vite-plugin-reset-css",
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return {
          html,
          tags: [
            {
              tag: "style",
              children: `
                html,
                body,
                div,
                span,
                h1,
                h2,
                h3,
                h4,
                p,
                blockquote,
                pre,
                a,
                code,
                img,
                strong,
                sub,
                sup,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                nav,
                section,
                audio,
                video {
                  margin: 0;
                  padding: 0;
                  border: 0;
                  height: 100%;
                  font-size: 100%;
                  font-family: 'Inter', sans-serif;
                  vertical-align: baseline;
                }

                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                  display: block;
                }

                body {
                  line-height: 1;
                }

                ol,
                ul {
                  list-style: none;
                }

                blockquote,
                q {
                  quotes: none;
                }

                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                  content: '';
                  content: none;
                }

                table {
                  border-collapse: collapse;
                  border-spacing: 0;
                }

                @font-face {
                  font-family: emoji;
                  src: local('Apple Color Emoji'),
                    local('Android Emoji'),
                    local('Segoe UI'),
                    local(EmojiSymbols),
                    local(Symbola);
                  unicode-range: U+1F300-1F5FF, U+1F600-1F64F, U+1F680-1F6FF, U+2600-26FF;
                }
              `,
              injectTo: "head-prepend",
            },
          ],
        };
      },
    },
  };
}
