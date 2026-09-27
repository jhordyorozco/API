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

         .fondo-color {
          background: hsl(204, 88%, 19%);
          color: hsl(0, 0%, 100%);
        }

        section {
          align-items: center;
          background: hsl(204, 88%, 19%);
          color: hsl(0, 0%, 100%);
          display: grid;
          gap: 3rem;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          margin: 0 auto;
          max-width: 1120px;
          min-height: 80vh;
          padding: 2rem 1rem;
        }
      </style>

      <div class="fondo-color">
      <section>
        <slot></slot>
      </section>
      </div>
    `;
  }
}

customElements.define('main-component', Main);