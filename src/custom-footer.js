import { LitElement, html } from 'lit-element';

export class CustomFooter extends LitElement {
  render() {
    return html`
      <style>
        :host {
          position: fixed;
          bottom: 0;
          display: flex;
          align-items: center;
          background-color: #eee;
          width: 100%;
          justify-content: center;
        }

        .description {
          margin-right: 1rem;
        }
      </style>

      <p class="description">
        Made in Singapore by
        <a href="https://teeny-thoughts.netlify.app">zwliew</a>.
      </p>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=zwliew&repo=kawaiifx&type=star&count=true"
        frameborder="0"
        scrolling="0"
        width="170px"
        height="20px"
      ></iframe>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
