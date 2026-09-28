class Steps extends HTMLElement {
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
      image: {
        alt: 'Persona en videoconsulta con su médico desde el móvil',
        src: './src/img/doctor-pills.webp',
      },
      steps: [
        {
          number: '01',
          text: 'Selecciona la especialidad y el horario que mejor te convenga. Tras completar el pago seguro, recibirás un correo electrónico con el enlace de acceso a la videoconsulta de telemedicina.',
          title: 'Reserva tu Cita Médica Online',
        },
        {
          active: true,
          number: '02',
          text: 'Hablarás con tu médico online mediante una plataforma privada y encriptada que garantiza tu total confidencialidad.',
          title: 'Consulta Online',
        },
        {
          number: '03',
          text: 'Al finalizar la consulta, obtendrás tu diagnóstico oficial, el informe médico firmado y tu receta médica electrónica válida en cualquier farmacia, todo disponible al instante.',
          title: 'Recibe tu diagnóstico y tratamiento',
        },
      ],
      title: 'Tu médico online en 3 pasos, estés donde estés.',
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
          background: hsl(0, 0%, 95%);
        }

        section {
          align-items: start;
          display: grid;
          gap: 3rem;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          margin: 0 auto;
          max-width: 1120px;
          padding: 4rem 1rem;
        }

        .hero-image {
          border-radius: 1rem;
          display: block;
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        .content {
          display: grid;
          gap: 1.5rem;
        }

        h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          line-height: 1.2;
        }

        .list {
          display: grid;
          gap: 1rem;
          list-style: none;
          padding: 0;
        }

        .card {
          align-items: start;
          background: hsl(204, 88%, 19%);
          border-radius: 0.6rem;
          color: hsl(0, 0%, 100%);
          display: grid;
          gap: 1rem;
          grid-template-columns: auto 1fr;
          padding: 1.25rem;
        }

        .card:hover {
          background: hsl(213, 76%, 55%);
        }

        .number {
          align-items: center;
          border: 2px dashed hsl(0, 0%, 100%);
          border-radius: 50%;
          display: grid;
          flex-shrink: 0;
          font-size: 0.9rem;
          font-weight: 700;
          height: 3.5rem;
          justify-items: center;
          width: 3.5rem;
        }

        h3 {
          font-size: 1rem;
          margin-bottom: 0.4rem;
        }

        p {
          color: hsl(0, 0%, 92%);
          font-size: 0.9rem;
          line-height: 1.4;
        }
      </style>

      <div class="wrapper">
      <section>
        <img class="hero-image" src="${this.data.image.src}" alt="${this.data.image.alt}">

        <div class="content">
          <h2>${this.data.title}</h2>
          <ul class="list"></ul>
        </div>
      </section>
      </div>
    `;

    const list = this.shadow.querySelector('.list');

    this.data.steps.forEach((item) => {
      const li = document.createElement('li');
      const number = document.createElement('span');
      const body = document.createElement('div');
      const title = document.createElement('h3');
      const text = document.createElement('p');

      li.classList.add('card');

      number.classList.add('number');
      number.textContent = item.number;

      title.textContent = item.title;
      text.textContent = item.text;

      body.append(title, text);
      li.append(number, body);
      list.appendChild(li);
    });
  }
}

customElements.define('steps-component', Steps);