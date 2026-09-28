class OmcBadge extends HTMLElement {
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
      alt: 'Organización Médica Colegial de España',
      src: './src/img/omc.webp',
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

        .badge {
          background: hsl(0, 0%, 100%);
          border-radius: 0.4rem;
          display: inline-block;
          padding: 0.5rem 0.75rem;
        }

        img {
          display: block;
          height: 2.5rem;
        }
      </style>

      <div class="badge">
        <img src="${this.data.src}" alt="${this.data.alt}">
      </div>
    `;
  }
}

customElements.define('omc-badge-component', OmcBadge);