import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "./assets/lit.svg";
import viteLogo from "/vite.svg";

/**
 * drawer element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("sva-drawer")
export class SvaDrawer extends LitElement {
  /**
   * drawer elements
   */
  @property({ type: Array<String> })
  elements = 0;

  render() {
    return html`
        <div
      class="backdrop"
      [class.visible]="isNavOpen()"
      @click=${this._toggleNav}
      @keyup=${this._handleKeyUp}
      aria-hidden="true"></div>
      ${this.elements.map((color) =>
        html`<li style="color: ${color}">${color}</li>`
      )}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (typeof this.getAttribute('elements') === 'string') {
      this.elements = JSON.parse(this.getAttribute('elements'));
    }
  }

  private _handleKeyUp(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed!');
    }
  }

  private _toggleNav() {
    console.log('Button clicked!');
  }

  static styles = css`
    * {
      text-transform: lowercase;
    }

    ul {
      margin-left: unset;
    }

    li {
      list-style-type: none;
    }

    .backdrop {
      display: none;
    }

    .backdrop.visible {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.5;
      z-index: 15;
      cursor: pointer;
      background-color: var(--background-contrast-color);
    }

    .drawer-button {
      position: fixed;
      right: calc(var(--base-spacing) * 4);
      bottom: calc(var(--base-spacing) * 4);
      z-index: 40;
    }

    /* lg */
    @media (width >= 64rem) {
      .drawer-button {
        position: relative;
        right: unset;
        bottom: unset;
        z-index: unset;
      }
    }

    .drawer-button__content {
      display: flex;
      align-items: center;
    }

    .drawer-button__content__menu-icon,
    .drawer-button__content__close-icon {
      display: none;
    }

    .drawer-button__content__menu-icon.visible {
      display: inline-flex;
    }

    .drawer-button__content__close-icon.visible {
      display: inline-flex;
    }

    .drawer-button__space {
      display: none;
    }

    /* lg */
    @media (width >= 64rem) {
      .drawer-button__space {
        display: inline-flex;
      }
    }

    .drawer-button__content__text {
      display: none;
      text-decoration: none;
    }

    /* lg */
    @media (width >= 64rem) {
      .drawer-button__content__text {
        display: inline-flex;
      }
    }

    .drawer {
      display: flex;
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      flex-direction: column;
      transform: translateY(100%);
      z-index: 20;
      transition: transform var(--transition-duration);
      border: solid 2px var(--background-contrast-color);
      background-color: var(--background-color);
      padding-bottom: calc(var(--base-spacing) * 19);
    }

    .drawer * {
      text-decoration: underline;
    }

    .drawer.visible {
      transform: translateY(0%);
    }

    /* lg */
    @media (width >= 64rem) {
      .drawer {
        top: 0;
        left: unset;
        transform: translateY(0%);
        transform: translateX(100%);
        width: calc(var(--base-spacing) * 100);
      }

      .drawer.visible {
        transform: translateX(0%);
      }
    }

    .drawer__list__to-children-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      border-bottom: solid 2px var(--background-contrast-color);
      background-color: var(--background-color);
      padding: calc(var(--base-spacing) * 4) calc(var(--base-spacing) * 6);
      width: 100%;
    }

    .drawer__list__to-children-link:hover {
      background-color: var(--background-highlighted-color);
    }

    .drawer__list__to-children-link.active {
      color: var(--primary-color);
      font-weight: 600;
    }

    .drawer__list__navigable-link {
      display: inline-flex;
      border-bottom: solid 2px var(--background-contrast-color);
      padding: calc(var(--base-spacing) * 4) calc(var(--base-spacing) * 6);
      width: 100%;
    }

    .drawer__list__navigable-link:hover {
      background-color: var(--background-highlighted-color);
    }

    .drawer__list__navigable-link.active {
      color: var(--primary-color);
      font-weight: 600;
    }

    .drawer__list__sublist {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(100%);
      z-index: 30;
      transition: transform var(--transition-duration);
      border: solid 2px var(--background-contrast-color);
      background-color: var(--background-color);
    }

    .drawer__list__sublist.visible {
      transform: translateX(0%);
    }

    .drawer__list__sublist__to-parent-link {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      border-bottom: solid 2px var(--background-contrast-color);
      padding: calc(var(--base-spacing) * 4) calc(var(--base-spacing) * 6);
      width: 100%;
    }

    .drawer__list__sublist__to-parent-link:hover {
      background-color: var(--background-highlighted-color);
    }

    .drawer__list__sublist__navigable-link {
      display: block;
      border-bottom: solid 2px var(--background-contrast-color);
      padding: calc(var(--base-spacing) * 4) calc(var(--base-spacing) * 6);
      width: 100%;
    }

    .drawer__list__sublist__navigable-link:hover {
      background-color: var(--background-highlighted-color);
    }

    .drawer__list__sublist__navigable-link.active {
      color: var(--primary-color);
      font-weight: 600;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": SvaDrawer;
  }
}
