import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { twind } from "../decorators/twind";

@customElement("waving-emoji")
@twind
export class WavingEmoji extends LitElement {
  @property()
  declare style: CSSStyleDeclaration;

  render() {
    return html`<span
      style="view-transition-name: hello"
      class="font-[emoji] animate-waving inline-block"
      ><slot></slot
    ></span>`;
  }
}
