class Menu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadData();
    this.render();

    document.addEventListener('toggleMenu', () => {
      this.setOpen();
    })
  }

  loadData() {
    this.data = {
      initials: 'JO',
      name: 'Jhordy Orozco',
      plan: 'Admin',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        .content {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        nav {
          background: hsl(39, 33%, 77%);
          border-right: 1px solid hsl(39, 20%, 57%);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100vh;
          left: 0;
          overflow: hidden;
          padding: clamp(0.5rem, 3vw, 0.8rem);
          position: fixed;
          top: 0;
          transition: width 0.25s ease, box-shadow 0.25s ease;
          width: 4.2rem;
          z-index: 10;
        }

        nav.active {
          box-shadow: 0 0 1.5rem hsla(0, 0%, 0%, 0.25);
          width: min(18rem, 85vw);
        }
      </style>

      <nav>
          <slot></slot>
      </nav>
    `;
  }

  setOpen() {
    const menu = this.shadow.querySelector('nav')
    menu.classList.toggle('active')
  }
}

customElements.define('menu-component', Menu);
