class Header extends HTMLElement {
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
          background-color: hsl(204, 88%, 19%);
          display: block;
          font-family: "Poppins", sans-serif;
          padding: 1rem 0;
        }

        header {
          align-items: center;
          background-color: hsl(0, 0%, 100%);
          border-radius: 0.5rem 0.5rem 0 0;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1120px;
          padding: 0.5rem 1rem;
          width: 95%;
        }
      </style>

      <div class="wrapper">
        <header>
          <slot></slot>
        </header>
      </div>
    `;
  }
}

customElements.define('header-component', Header);