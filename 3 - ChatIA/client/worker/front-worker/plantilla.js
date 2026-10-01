class Title extends HTMLElement {

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
    
    </style>

    <div>
    
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

customElements.define('title-component', Title);