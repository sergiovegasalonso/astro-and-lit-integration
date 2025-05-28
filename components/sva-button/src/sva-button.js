import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SvaButton extends LitElement {
  
  constructor() {
    super()
  }

  render() {
    return html`
     <button class="button">
        <slot></slot>
      </button>
    `
  }

  static get styles() {
    return css`
      .button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: solid 2px var(--background-contrast-color);
      background-color: var(--background-color);
      padding: calc(var(--base-spacing) * 2) calc(var(--base-spacing) * 4);
    }

    .button:hover {
      background-color: var(--background-highlighted-color);
    }
    `
  }
}

window.customElements.define('sva-button', SvaButton)
