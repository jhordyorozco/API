class Boton extends HTMLElement {
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
      label: 'Solicitar consulta',
      url: '#',
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

        .boton {
          align-items: center;
          background-color: hsl(204, 88%, 19%);
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          display: flex;
          font-weight: 600;
          height: 3rem;
          overflow: hidden;
          padding: 0.5rem 0.75rem;
          position: relative;
          text-decoration: none;
          z-index: 0;
        }
      </style>

      <a class="boton" href="${this.data.url}">${this.data.label}</a>
    `;
  }
}

customElements.define('boton-component', Boton);