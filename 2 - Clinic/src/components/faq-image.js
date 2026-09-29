class FaqImage extends HTMLElement {
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
      alt: 'Equipo médico de Clínica Digital sonriendo en una videollamada desde el móvil',
      src: './src/img/doctor-movil.webp',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        .image {
          border-radius: 1rem;
          display: block;
          height: auto;
          width: 100%;
        }
      </style>

      <img class="image" src="${this.data.src}" alt="${this.data.alt}">
    `;
  }
}

customElements.define('faq-image-component', FaqImage);