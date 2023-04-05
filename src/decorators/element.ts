import { LitElement } from "lit";
import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

type CustomElementClass = typeof LitElement;

/**
 * This decorator must be used as a last decorator of the custom element class.
 */
export const element =
  <T extends CustomElementClass>(tagName: string) =>
  (constructor: T): T => {
    customElements.define(tagName, constructor as CustomElementConstructor);

    // @ts-ignore-next-line
    return class extends withTwind(constructor) {
      static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        mode: "open" as ShadowRootMode,
      };
    };
  };
