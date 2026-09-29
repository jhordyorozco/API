class Faq extends HTMLElement {
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
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        section {
          align-items: center;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
          margin: 0 auto;
          max-width: 1120px;
          padding: 4rem 1rem;
        }

        ::slotted(faq-image-component) {
          display: block;
          justify-self: center;
          max-width: 22rem;
          width: 100%;
        }
      </style>

      <section>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define('faq-component', Faq);