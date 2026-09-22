class HeaderComponent extends HTMLElement {
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

        .header {
          align-items: center;
          background-color: rgba(238, 162, 7, 1);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
          justify-content: space-between;
          padding: 0.5rem 2rem;
          border-bottom: 0.3rem solid hsla(0, 0%, 100%, 1.00);
        }
      </style>

      <div class="header">
        <slot name="brand"></slot>
        <slot name="nav"></slot>
      </div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);

export {HeaderComponent};