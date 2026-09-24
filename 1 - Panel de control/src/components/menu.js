class MenuComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
          display: flex;
          justify-content: flex-end;
        }

        .menu-toggle {
          align-items: end;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .menu-toggle span {
          background-color: hsl(0, 0%, 100%);
          border-radius: 2px;
          display: block;
          height: 4px;
          transition: all 0.3s ease;
          width: 40px;
        }

        .menu-toggle span:nth-child(1) {
          transform: rotate(0deg) translate(0);
        }

        .menu-toggle span:nth-child(2) {
          opacity: 1;
        }

        .menu-toggle span:nth-child(3) {
          transform: rotate(0deg) translate(0);
        }

        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 9px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -10px);
        }

        nav {
          background-color: hsl(24, 77%, 61%);
          padding: 5rem 1.5rem;
          position: fixed;
          right: 0;
          top: 0;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          width: 200px;
          z-index: -1;
        }

        nav.menu-open {
          transform: translateY(0);
        }

        nav ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          list-style: none;
        }

        nav a {
          color: hsl(0, 0%, 100%);
          font-size: 1.5rem;
          text-decoration: none;
        }
      </style>

      <section class="menu">
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Pedidos</a></li>
            <li><a href="#">Ajustes</a></li>
          </ul>
        </nav>
      </section>
    `;
  }

  addListeners() {
    const menu = this.shadowRoot.querySelector('nav');
    const toggle = this.shadowRoot.querySelector('.menu-toggle');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
      toggle.classList.toggle('active');
    });
  }
}

customElements.define('menu-component', MenuComponent);

