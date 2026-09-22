class LogoComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = 
    /* html */ `
      <style>
        * {
          margin: 0;
          box-sizing: border-box;
        }

        .logo {
          align-items: center;
          display: grid;
          gap: 2.5rem;
          grid-auto-flow: column;
        }

        .logo-icon {
          background-color: hsl(220, 31%, 33%);
          border-radius: 50%;
          fill: hsl(193, 100%, 71%);
          padding: 0.5rem;
          width: 2.5rem;
        }

        .logo p {
          color: hsl(0, 0%, 100%);
          font-weight: bold;
          font-size: 1.5rem;
        }
      </style>

      <div class="logo">
        <div class="logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>account</title>
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
        </div>
        <p>Go Kart - Usuarios</p>
      </div>
    `;
  }
}

customElements.define('logo-component', LogoComponent);

export {LogoComponent};