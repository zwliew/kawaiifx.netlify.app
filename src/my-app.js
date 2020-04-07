import { LitElement, html } from 'lit-element';

export class MyApp extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Nunito"
      />

      <style>
        :host {
          font-family: Nunito, Roboto, Helvetica, Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>

      <custom-header>(〃＾▽＾〃)</custom-header>
      <character-gallery> </character-gallery>
      <custom-footer></custom-footer>
    `;
  }
}
customElements.define('my-app', MyApp);
