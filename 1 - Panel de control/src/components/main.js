class Main extends HTMLElement {

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
        * {
          margin: 0;
          box-sizing: border-box;
        }

        main {
          background-color: hsl(210, 40%, 96%);
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 1rem;
          min-height: 90vh;
          max-height: 90vh;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          main {
            grid-template-columns: 1fr;
            padding: 1rem;
          }
        }
        
      </style>

      <main>
        <slot></slot>
      </main>

    `
  }
}

customElements.define('main-component', Main);