import { LitElement, html } from 'lit-element';

export class CustomHeader extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <h1 id="heading" class="animated infinite pulse">
        <slot></slot>
      </h1>
    `;
  }
}

customElements.define('custom-header', CustomHeader);
