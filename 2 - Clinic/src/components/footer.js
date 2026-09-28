class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        .wrapper {
          background: hsl(204, 88%, 19%);
          color: hsl(0, 0%, 100%);
          font-family: 'Poppins', sans-serif;
        }

        footer {
          display: grid;
          gap: 2rem;
          grid-template-columns: 3fr 1fr;
          margin: 0 auto;
          max-width: 1120px;
          padding: 3rem 1rem 0;
        }

        ::slotted(footer-bottom-component) {
          grid-column: 1 / -1;
        }
      </style>

      <div class="wrapper">
        <footer>
          <slot></slot>
        </footer>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);