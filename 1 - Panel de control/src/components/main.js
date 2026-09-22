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

    .main {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
      gap: 1rem;
      padding: 1rem;
    }

    
    </style>

     <div class="main">
        <slot name="table"></slot>
        <slot name="form"></slot>
      </div>

    `

    this.shadow.querySelector('.title').addEventListener('click', () => {
      this.alertMessage()
    })
  }

  alertMessage () {
    alert(this.message)
  }
}

customElements.define('main-component', Main);