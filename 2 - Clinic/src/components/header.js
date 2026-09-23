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
      /*html*/ `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
      }

      .header {
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-radius: 1rem;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
        justify-content: space-between;
        margin: 1.5rem auto;
        max-width: 90%;
        padding: 1rem 2rem;
      }

      .header__logo ::slotted(img) {
        border-radius: 50%;
        height: 2.5rem;
        width: 2.5rem;
      }
    </style>

    <div class="header">
      <div class="header__logo">
        <slot name="logo"></slot>
      </div>
      <slot name="menu"></slot>
    </div>
    `;
  }
}

customElements.define('header-component', Header);

export {Header};