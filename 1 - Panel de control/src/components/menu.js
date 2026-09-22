class MenuComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.addListeners();
  }

  render() {
    this.shadowRoot.innerHTML = 
    /* html */ `
      <style>
        * {
          margin: 0;
          box-sizing: border-box;
        }

        .menu {
          align-items: center;
          display: grid;
          position: relative;
          justify-content: end;
          padding: 0.5rem;
        }

        .menu-icon {
          cursor: pointer;
          fill: hsl(0, 0%, 100%);
          width: 2.5rem;
        }

        .menu ul {
          background-color: hsla(24, 77%, 61%, 1.00);
          display: none;
          gap: 1rem;
          list-style: none;
          padding: 1.5rem;
          position: absolute;
          right: 0;
          top: 2.5rem;
          min-width: 10rem;
        }

        .menu-open ul {
          display: grid;
        }

        .menu a {
          color: hsl(0, 0%, 100%);
          text-decoration: none;
          font-size: 1.5rem;
        }
      </style>

      <nav class="menu">
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Pedidos</a></li>
          <li><a href="#">Ajustes</a></li>
        </ul>
      </nav>
    `;
  }

  addListeners() {
    const menu = this.shadowRoot.querySelector('.menu');
    const icon = this.shadowRoot.querySelector('.menu-icon');

    icon.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
    });
  }
}

customElements.define('menu-component', MenuComponent);

export {MenuComponent};