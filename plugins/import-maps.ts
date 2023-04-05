import { type Plugin } from "vite";

type ImportMap = {
  imports: Record<string, string>;
  scopes?: Record<string, Record<string, string>>;
};

export function importMapsPlugin(
  ...importMaps: (ImportMap | ImportMap[] | (() => ImportMap | ImportMap[]))[]
): Plugin {
  const importMapList = importMaps.flatMap((m) =>
    typeof m === "function" ? m() : m
  );

  const combinedImportMap: ImportMap = Object.assign(
    { imports: {}, scopes: {} },
    ...importMapList
  );
  if (Object.keys(combinedImportMap.scopes ?? {}).length === 0) {
    delete combinedImportMap["scopes"];
  }

  return {
    name: "@kimkanu/vite-plugin-import-maps",
    config() {
      return {
        build: {
          rollupOptions: {
            external: Object.keys(combinedImportMap.imports).map((module) =>
              module.endsWith("/")
                ? new RegExp(
                    `^${module
                      .slice(0, -1)
                      .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")}\/.*`
                  )
                : module
            ),
          },
        },
      };
    },
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return {
          html,
          tags: [
            {
              tag: "script",
              attrs: {
                type: "importmap",
              },
              children: JSON.stringify(combinedImportMap),
              injectTo: "head-prepend",
            },
          ],
        };
      },
    },
  };
}
