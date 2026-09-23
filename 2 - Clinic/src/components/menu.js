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

      .menu {
        align-items: center;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
        justify-content: space-between;
      }

      .menu__list {
        display: grid;
        gap: 2rem;
        grid-auto-flow: column;
        list-style: none;
      }

      .menu__link {
        color: hsl(210, 60%, 20%);
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
      }

      .menu__button {
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

    <div class="menu">
      <nav>
        <ul class="menu__list">
          <li><a class="menu__link" href="#especialidades">Especialidades</a></li>
          <li><a class="menu__link" href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a class="menu__link" href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      <button class="menu__button">Solicitar Consulta</button>
    </div>
    `;
  }
}

customElements.define('menu-component', Menu);

export {Menu};