class Specialties extends HTMLElement {
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
        label: 'Ver todas las Especialidades',
        url: '#condiciones',
      },
      title: 'Especialidades en telemedicina',
      subtitle: 'Contamos con una red completa de telemedicina que abarca desde pediatría hasta salud mental. Elige la especialidad que necesitas y reserva tu cita médica online con doctores colegiados en activo.',
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

        .wrapper {
          background-color: hsla(0, 0%, 95%, 1.00);
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

      <div class="wrapper">
          <section>
            <h2>${this.data.title}</h2>
            <p>${this.data.subtitle}</p>
            <slot></slot>
            <a class="button" href="${this.data.button.url}">${this.data.button.label}</a>
          </section>
      </div>
    `;
  }
}

customElements.define('specialties-component', Specialties);