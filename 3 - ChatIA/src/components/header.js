class Header extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
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

        .header {
          display: block;
        }
      </style>

      <header>
        <slot></slot>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
