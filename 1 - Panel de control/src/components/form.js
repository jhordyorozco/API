class Form extends HTMLElement {

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
        box-sizing: border-box;
        margin: 0;
      }

      .form-header {
        display: grid;
        gap: 1rem;
        grid-template-columns: minmax(0, 1fr) auto;
      }

      .tabs{
        display: flex;
      }

      .tab {
        align-items: center;
        background-color: hsla(35, 90%, 55%, .5);
        cursor: pointer;
        display: flex;
        height: 2rem;
        justify-content: center;
        width: 5rem;
      }

      .tab.active{
        background-color: hsl(35, 90%, 55%);
      }

      .tab h2 {
        color: hsl(0, 0%, 100%);
        font-size: 1rem;
        font-weight: 700;
      }

      .form-icon {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
      }

      .form-erase, .form-save {
        align-items: center;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }

      .form-erase svg, .form-save svg {
        background-color: hsl(35, 90%, 55%);
        fill: hsl(0, 0%, 100%);
        width: 2rem;
      }

      .form-body {
        display: grid;
        background-color: hsl(0, 0%, 100%);
        height: 80%;
        padding: 1.5rem;
        border-top:2px solid hsl(35, 90%, 55%);
      }

      .tab-content {
        display: none;
        grid-template-columns: repeat(auto-fit, minmax(min(100%,360px), 1fr));
        gap: 1.5rem;
      }

      .tab-content.active {
        display: grid;
      }

      .name-inputs, .email-inputs {
        border: 1px solid hsl(0, 0%, 75%);
        height: 2rem;
        padding: 0.5rem;
        width: 100%;
      }

      label {
        display: grid;
        gap: 0.5rem;
      }
    </style>

    <section class="form">
      <div class="form-header">
        <div class="tabs">
          <div class="tab active" data-tab="general">
            <h2>General</h2>
          </div>
          <div class="tab" data-tab="images">
            <h2>Imagenes</h2>
          </div>
        </div>

        <div class="form-icon">
          <div class="form-erase">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eraser</title><path d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" /></svg>
          </div>

          <div class="form-save">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
          </div>
        </div>
      </div>
    
      <div class="form-body">
        <form action="">
          <div class="tab-content active" data-tab="general">
            <label>Nombre
              <input type="text" name="name" class="name-inputs">
            </label>
            <label>Email
              <input type="email" name="email" class="email-inputs">
            </label>
          </div>
          
          <div class="tab-content" data-tab="images">
            <label>Nombre
              <input type="text" name="name" class="name-inputs">
            </label>
          </div>
        </form>
      </div>
    </section>
    `

    this.shadow.querySelector('.form').addEventListener('click', event => {
      if (event.target.closest('.tab')) {
        const tab = event.target.closest('.tab')

        this.shadow.querySelector('.tab.active').classList.remove('active')
        tab.classList.add('active')

        this.shadow.querySelector('.tab-content.active').classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
      }
    })

  }
}

customElements.define('form-component', Form);