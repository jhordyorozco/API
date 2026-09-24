class Header extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }
  
  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
      }

      header {
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1.5rem hsla(212, 60%, 10%, 0.25);
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
        padding: 1rem 1.5rem;
        width: 100%;
      }
    
    </style>

    <header>
      <slot></slot>
    </header>

    `

  }

}

customElements.define('header-component', Header);