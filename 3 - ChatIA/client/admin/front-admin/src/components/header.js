class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML =
    /* html */ `
      <style>

        * {
          margin: 0;
          box-sizing: border-box;
        }

        header {
          align-items: center;
          background-color: hsl(40, 94%, 48%);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
          height: 10vh;
          justify-content: space-between;
          padding: 0 1rem;
          position: relative;
          z-index: 10;
        }
      </style>

      <header>
        <slot></slot>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent)