class HeroImage extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
  }

  loadData() {
    this.data = {
      alt: 'Equipo de profesionales médicos',
      src: './src/img/doc-hero.webp',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        img {
          border: 0.4rem solid hsl(0, 0%, 100%);
          border-radius: 1rem;
          display: block;
          width: 80%;
        }
      </style>

      <img src="${this.data.src}" alt="${this.data.alt}">
    `;
  }
}

customElements.define('hero-image-component', HeroImage);