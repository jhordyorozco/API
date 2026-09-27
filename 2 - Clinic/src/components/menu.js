class Menu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
  }

  loadData() {
    this.data = {
      dropdown: {
        items: [
          {label: 'Medicina General 24/7', url: '#'},
          {label: 'Pediatría', url: '#'},
          {label: 'Dermatología', url: '#'},
          {label: 'Endocrinología', url: '#'},
          {label: 'Cardiología', url: '#'},
          {label: 'Traumatología', url: '#'},
          {label: 'Rehabilitación', url: '#'},
          {label: 'Gastroenterología / Digestivo', url: '#'},
          {label: 'Psicología', url: '#'},
          {label: 'Nutrición', url: '#'},
        ],
        label: 'Especialidades',
        url: '#',
      },
      navLinks: [
        {label: 'Sobre nosotros', url: '#'},
        {label: 'Contacto', url: '#'},
      ],
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

        .menu {
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }

        nav {
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }

        nav a {
          color: hsl(210, 9%, 31%);
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          position: relative;
          text-decoration: none;
        }

        nav a::after {
          background-color: hsl(204, 88%, 19%);
          bottom: 0;
          content: "";
          height: 0.15rem;
          left: 0.75rem;
          position: absolute;
          right: 0.75rem;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        nav a:hover::after {
          transform: scaleX(1);
        }

        .dropdown {
          position: relative;
        }

        .dropdown::before {
          content: "";
          height: 0.75rem;
          left: 0;
          position: absolute;
          top: 100%;
          width: 100%;
        }

        .dropdown-menu {
          background-color: hsl(0, 0%, 100%);
          border-radius: 0.4rem;
          box-shadow: 0 0.5rem 1rem hsla(0, 0%, 0%, 0.15);
          display: none;
          flex-direction: column;
          left: 0;
          margin-top: 0.75rem;
          min-width: 15rem;
          padding: 0.5rem;
          position: absolute;
          top: 100%;
          z-index: 1000;
        }

        .dropdown-menu-list {
          display: flex;
          flex-direction: column;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dropdown-menu-link {
          color: hsl(204, 88%, 19%);
          display: block;
          padding: 0.6rem 0.75rem;
          white-space: nowrap;
        }

        .dropdown-menu-link:hover {
          background-color: hsl(204, 88%, 96%);
        }

        .dropdown:hover .dropdown-menu {
          display: flex;
        }
      </style>

      <div class="menu">
        <nav class="nav">
          <div class="dropdown">
            <a href="${this.data.dropdown.url}">${this.data.dropdown.label}</a>

            <div class="dropdown-menu">
              <ul class="dropdown-menu-list"></ul>
            </div>
          </div>
        </nav>
      </div>
    `;

    const dropdownList = this.shadow.querySelector('.dropdown-menu-list');

    this.data.dropdown.items.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('dropdown-menu-item');

      const a = document.createElement('a');
      a.classList.add('dropdown-menu-link');
      a.href = item.url;
      a.textContent = item.label;

      li.appendChild(a);
      dropdownList.appendChild(li);
    });

    const nav = this.shadow.querySelector('.nav');

    this.data.navLinks.forEach((item) => {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;

      nav.appendChild(a);
    });
  }
}

customElements.define('menu-component', Menu);