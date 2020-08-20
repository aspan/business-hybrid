import {css, customElement, html, LitElement, property} from "lit-element";
import {globalCss} from "./global-styles";

@customElement("brand-expression")
export class BrandExpression extends LitElement {
    @property()
    text: string = "";
    @property({type: Boolean})
    open: boolean = false;
    @property({type: Boolean})
    rail: boolean = false;
    @property({type: Boolean})
    isMenuExpanded: boolean = false;

    static get styles() {
        return [
            globalCss,
            css`
        .brand-expression {
          align-items: center;
          box-shadow: inset 0 -1px var(--lumo-contrast-10pct);
          box-sizing: border-box;
          display: flex;
          /* Application header height with tabs */
          height: calc(var(--app-bar-height) + var(--lumo-size-l));
          justify-content: center;
          padding: var(--lumo-space-m);
        }

        .brand-expression__logo {
          max-height: 100%;
          max-width: 100%;
        }

        .brand-expression__title {
          margin-left: var(--lumo-space-s);
        }
        
        @media (min-width: 1024px) {
          .brand-expression[rail]:not([open]):not([isMenuExpanded]) .brand-expression__title {
             display: none;
          }
        }
      `
        ];
    }

    render() {
        return html`
      <div class="brand-expression" ?open="${this.open}" ?rail="${this.rail}" ?isMenuExpanded="${this.isMenuExpanded}">
        <img
          class="brand-expression__logo"
          src="images/logos/18.png"
          alt="${this.text} logo"
        />
        <label class="h3 brand-expression__title">${this.text}</label>
      </div>
    `;
    }
}
