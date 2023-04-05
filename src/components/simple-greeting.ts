import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { twind } from "../decorators/twind";

@customElement("simple-greeting")
@twind
export class SimpleGreeting extends LitElement {
  @property()
  declare name: string;

  @property()
  declare to: string;

  render() {
    return html`<section class="bg-slate-200 h-full grid place-items-center">
      <a
        href="${this.to}"
        class="text-slate-600 hover:text-blue-600 transition-colors font-bold text-5xl"
      >
        <span>Hello, ${this.name}! <slot></slot></span>
      </a>
    </section>`;
  }
}
