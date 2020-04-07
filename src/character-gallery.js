import { LitElement, html, customElement } from 'lit-element';

const CHARACTERS = [
  {
    name: 'mayuri',
    audio: 'src/audio/mayuri.mp3',
    image: 'src/images/mayuri.png',
    primary: '#f6e4cb',
    secondary: '#748990',
    duration: '1199',
  },
  {
    name: 'nico',
    audio: 'src/audio/nico.mp3',
    image: 'src/images/nico.png',
    primary: '#d4465e',
    secondary: '#a0a1a7',
    duration: '2038',
  },
];

export class CharacterGallery extends LitElement {
  static get properties() {
    return {
      index: { type: Number },
    };
  }

  constructor() {
    super();

    this.index = 0;
  }

  next() {
    this.index = (this.index + 1) % CHARACTERS.length;
  }

  prev() {
    this.index = (this.index - 1 + CHARACTERS.length) % CHARACTERS.length;
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .character {
          margin-bottom: 1rem;
        }

        .nav-button {
          height: 3rem;
        }

        .nav-button:hover {
          cursor: pointer;
        }
      </style>

      <kawaii-character
        id="character"
        class="character"
        image="${CHARACTERS[this.index].image}"
        audio="${CHARACTERS[this.index].audio}"
        duration="${CHARACTERS[this.index].duration}"
      ></kawaii-character>
      <section>
        <svg viewBox="0 0 24 24" class="nav-button" @click="${this.prev}">
          <path
            id="prev"
            style="fill: ${CHARACTERS[this.index].secondary}"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
        <svg viewBox="0 0 24 24" class="nav-button" @click="${this.next}">
          <path
            id="next"
            style="fill: ${CHARACTERS[this.index].secondary}"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </section>
    `;
  }
}

customElements.define('character-gallery', CharacterGallery);
