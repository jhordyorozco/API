class Header extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>

        * {
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          background-color: hsl(204, 88%, 19%);
          display: block;
          font-family: "Poppins", sans-serif;
          padding: 1rem 0;
        }

        header {
          align-items: center;
          background-color: hsl(0, 0%, 100%);
          border-radius: 0.5rem 0.5rem 0 0;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1120px;
          padding: 0.5rem 1rem;
          width: 95%;
        }

        .logo img {
          display: block;
          width: 10rem;
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
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
          width: calc(100% - 1.5rem);
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
          min-width: 15rem;
          padding: 0.5rem;
          position: absolute;
          top: calc(100% + 0.75rem);
          z-index: 10;
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

        .boton {
          align-items: center;
          background-color: hsl(204, 88%, 19%);
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          display: flex;
          font-weight: 600;
          height: 3rem;
          overflow: hidden;
          padding: 0.5rem 0.75rem;
          position: relative;
          text-decoration: none;
          z-index: 0;
        }

      </style>

      <header>

        <div class="logo">
          <a href="#">
            <img
              src="./src/img/LogoClinicaDigital.webp"
              alt="Clínica Digital"
            >
          </a>
        </div>

        <div class="menu">

          <nav>

            <div class="dropdown">

              <a href="#">
                Especialidades
              </a>

              <div class="dropdown-menu">

                <ul class="dropdown-menu-list">
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Medicina General 24/7</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Pediatría</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Dermatología</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Endocrinología</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Cardiología</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Traumatología</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Rehabilitación</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Gastroenterología / Digestivo</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Psicología</a>
                  </li>
                  <li class="dropdown-menu-item">
                    <a class="dropdown-menu-link" href="#">Nutrición</a>
                  </li>
                </ul>

              </div>

            </div>

            <a href="#">
              Sobre nosotros
            </a>

            <a href="#">
              Contacto
            </a>

          </nav>

        </div>

        <a class="boton" href="#">
          Solicitar consulta
        </a>

      </header>
    `;
  }
}

customElements.define('header-component', Header);

export { Header };