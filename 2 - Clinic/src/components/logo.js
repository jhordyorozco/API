class Logo extends HTMLElement {
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
      alt: 'Clínica Digital',
      href: '#',
      src: './src/img/LogoClinicaDigital.webp',
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

        .logo img {
          display: block;
          width: 10rem;
        }
      </style>

      <div class="logo">
        <a href="${this.data.href}">
          <img src="${this.data.src}" alt="${this.data.alt}">
        </a>
      </div>
    `;
  }
}

customElements.define('logo-component', Logo);