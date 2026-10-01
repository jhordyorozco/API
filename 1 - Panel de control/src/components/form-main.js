class FormMain extends HTMLElement {
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
      * { margin: 0; 
        box-sizing: border-box; 
      }

      section {
        align-items: center;
        background-color: hsla(35, 79%, 75%, 1.00);
        display: grid;
        justify-items: center;
        min-height: 100vh;
        padding: 2rem 1rem;
      }
    </style>

    <section>
      <slot></slot>
    </section>
  `;
  }
}

customElements.define('form-main-component', FormMain);