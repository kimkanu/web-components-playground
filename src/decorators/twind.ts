import { LitElement } from "lit";
import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

type CustomElementClass = typeof LitElement;

/**
 * CAUTION: This decorator must be used as a last decorator of the custom element class.
 */
export const twind = <T extends CustomElementClass>(constructor: T): T => {
  // @ts-ignore-next-linec
  return class extends withTwind(constructor) {
    static shadowRootOptions = {
      ...LitElement.shadowRootOptions,
      mode: "open" as ShadowRootMode,
    };
  };
};
