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

        .menu-toggle {
            position: absolute;
            right: 17px;
            z-index: 300;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            cursor: pointer;
            align-items: end;
            margin-right: 2rem;
          }
          
          .menu-toggle span {
            display: block;
            width: 40px;
            height: 4px;
            background-color: hsla(0, 0%, 100%, 1.00);
            transition: all 0.3s ease;
            border-radius: 2px;
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
      </style>

        <div class="menu-toggle" id="menuToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="menu">
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
    const toggle = this.shadowRoot.querySelector('.menu-toggle');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
      if (menu.classList.contains('menu-open')) {
        toggle.classList.add('active');
        } else {
        toggle.classList.remove('active');
        }
    });
  }
}

customElements.define('menu-component', MenuComponent);

export { MenuComponent };