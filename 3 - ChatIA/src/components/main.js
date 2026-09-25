class Main extends HTMLElement {
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

        .main {
          display: grid;
          height: 100dvh;
          width: 100%;
        }
      </style>

      <main>
        <slot></slot></main>
    `;
  }
}

customElements.define('main-component', Main);
