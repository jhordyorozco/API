class Header extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
  this.shadow.innerHTML =
  /*html*/`
  <style>
    header {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 2rem;
      max-width: 1120px;
      margin: 1rem auto;
      padding: 0.75rem 1rem;
      background: white;
      color: #06395b;
}

.logo {
  justify-self: start;
}

nav {
  display: flex;
  gap: 2rem;
}

.boton {
  justify-self: end;
  padding: 1rem;
  border-radius: 0.2rem;
  background: #06395b;
  color: white;
}
    
    </style>

  <header>
    <a class="logo" href="#">Clínica Digital</a>

    <nav aria-label="Navegación principal">
      <a href="#">Especialidades</a>
      <a href="#">Sobre nosotros</a>
      <a href="#">Contacto</a>
    </nav>

      <a class="boton" href="#">Solicitar consulta</a>
</header>

    `

  }

}

customElements.define('header-component', Header);