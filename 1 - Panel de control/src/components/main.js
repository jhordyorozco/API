class Main extends HTMLElement {

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
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          width: 100%;
        }

    .main {
      display: grid;
      grid-template-columns: minmax(20rem, 24rem) 1fr;
      gap: 1rem;
      padding: 1rem;
    }

    
    </style>

     <div class="main">
        <slot name="table"></slot>
        <slot name="form"></slot>
      </div>

    `
  }
}

customElements.define('main-component', Main);