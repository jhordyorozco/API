class Menu extends HTMLElement {
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

      div {
        align-items: center;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr auto auto;
      }

      nav {
        display: grid;
        gap: 2rem;
        grid-auto-flow: column;
      }

      span {
        background-color: hsl(210, 15%, 85%);
        height: 2rem;
        width: 0.0625rem;
      }

      button {
        background-color: hsl(210, 70%, 15%);
        border: none;
        border-radius: 0.5rem;
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        padding: 0.75rem 1.25rem;
      }
    </style>

    <div>
      <nav>
        <slot></slot>
      </nav>
      <span></span>
      <button>Solicitar Consulta</button>
    </div>
    `;
  }
}

customElements.define('menu-component', Menu);

export {Menu};