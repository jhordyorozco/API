class Treatment extends HTMLElement {
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
      button: {
        label: 'Ver todas las condiciones médicas',
        url: '#condiciones',
      },
      eyebrow: '¿Qué condición te preocupa hoy?',
      title: 'Diagnóstico y tratamiento online para las patologías más comunes',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        section {
          display: grid;
          gap: 1.5rem;
          margin: 0 auto;
          max-width: 1120px;
          padding: 4rem 1rem;
          text-align: center;
        }

        p {
          font-size: 1rem;
        }

        h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          line-height: 1.1;
          margin-inline: auto;
          max-width: 40rem;
        }

        ::slotted(conditions-carousel-component) {
          display: block;
          min-width: 0;
          width: 100%;
        }

        .button {
          background: hsl(213, 76%, 55%);
          border-radius: 0.4rem;
          color: hsl(0, 0%, 100%);
          font-weight: 700;
          justify-self: center;
          padding: 1rem 1.25rem;
          text-decoration: none;
        }
      </style>

      <section>
        <p>${this.data.eyebrow}</p>
        <h2>${this.data.title}</h2>
        <slot></slot>
        <a class="button" href="${this.data.button.url}">${this.data.button.label}</a>
      </section>
    `;
  }
}

customElements.define('treatment-component', Treatment);