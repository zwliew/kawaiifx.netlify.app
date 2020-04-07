import { LitElement, html } from 'lit-element';

export class KawaiiCharacter extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      audio: { type: String },
      duration: { type: Number },
    };
  }

  constructor() {
    super();

    this.playing = false;
  }

  play() {
    if (this.playing) {
      return;
    }

    if (!this.audioEl) {
      this.audioEl = this.shadowRoot.getElementById('audio');
    }
    if (!this.containerEl) {
      this.containerEl = this.shadowRoot.getElementById('container');
    }

    this.playing = true;
    this.audioEl.play();
    this.containerEl.classList.add('tada', 'animated');
    this.timeoutId = setTimeout(() => {
      this.reset();
    }, this.duration);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);

    if (['image', 'audio', 'duration'].includes(name)) {
      this.reset();
    }
  }

  reset() {
    clearTimeout(this.timeoutId);
    if (this.containerEl) {
      this.containerEl.classList.remove('tada', 'animated');
    }
    if (this.audioEl) {
      this.audioEl.currentTime = 0;
      this.audioEl.pause();
    }
    this.playing = false;
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />

      <style>
        .image {
          height: 20rem;
        }
      </style>

      <section
        id="container"
        @click="${this.play}"
        style="animation-duration: ${`${this.duration}ms`}"
      >
        <img id="image" class="image" src="${this.image}" />
        <audio id="audio" src="${this.audio}"></audio>
      </section>
    `;
  }
}
customElements.define('kawaii-character', KawaiiCharacter);
