class TreatmentCarousel extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
    this.addListeners();
  }

  loadData() {
    this.data = [
      {
        alt: 'Hombre usando un inhalador durante una videoconsulta',
        src: './src/img/drops-eye.webp',
        text: 'Tratamiento inmediato para la conjuntivitis. Identifica si sufres conjuntivitis vírica o conjuntivitis alérgicas y obtén tu receta de colirios oficial.',
        title: 'Conjuntivitis',
      },
      {
        alt: 'Hombre usando un inhalador durante una videoconsulta',
        src: './src/img/asma.webp',
        text: 'Diferencia el asma alérgica del asma bronquial o la ansiedad con una valoración médica inmediata. Gestionamos tu tratamiento y renovación de recetas de control (Ventolín, Pulmicort) de forma 100% legal y segura.',
        title: 'Asma',
      },
      {
        alt: 'Profesional sanitario mostrando dos muestras de orina',
        src: './src/img/analisis.webp',
        text: 'Trata tu infección de orina o cistitis de forma rápida y discreta. Obtén tu diagnóstico y la receta médica electrónica de antibióticos que necesitas mediante una cita médica online inmediata.',
        title: 'Infección de Orina o Cistitis',
      },
      {
        alt: 'Doctora atendiendo una consulta por videollamada',
        src: './src/img/doctor-call.webp',
        text: 'No dejes que el dolor de cabeza condicione tu vida. Identifica el origen de tus migrañas y accede a tratamientos preventivos y de alivio diseñados por especialistas en telemedicina.',
        title: 'Migrañas y Cefaleas',
      },
      {
        alt: 'Mujer con una reacción alérgica en el hombro',
        src: './src/img/alergias.webp',
        text: 'Diagnóstico visual inmediato para erupciones y picores. Sube tus fotos y habla con un médico para tratar tu reacción alérgica en minutos sin salir de casa.',
        title: 'Alergias en la piel',
      },
    ];
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

        .carousel {
          align-items: center;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: auto 1fr auto;
        }

        .arrow {
          align-items: center;
          background: transparent;
          border: none;
          color: hsl(204, 88%, 19%);
          cursor: pointer;
          display: grid;
          height: 2.5rem;
          justify-items: center;
          width: 2rem;
        }

        .arrow-icon {
          fill: none;
          height: 1.5rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1.5rem;
        }

        .track {
          display: grid;
          gap: 1rem;
          grid-auto-columns: 14rem;
          grid-auto-flow: column;
          list-style: none;
          min-width: 0;
          overflow-x: auto;
          padding: 0.5rem 0;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .card {
          align-content: start;
          background: hsl(0, 0%, 100%);
          border-radius: 0.5rem;
          box-shadow: 0 0.1rem 0.6rem hsla(0, 0%, 0%, 0.1);
          display: grid;
          overflow: hidden;
          scroll-snap-align: start;
        }

        .card-image {
          display: block;
          height: 16rem;
          object-fit: cover;
          width: 100%;
        }

        .card-body {
          display: grid;
          gap: 0.75rem;
          padding: 1rem 0.5rem;
        }

        h3 {
          color: hsl(210, 9%, 31%);
          font-size: 1.1rem;
        }

        p {
          color: hsl(210, 9%, 25%);
          font-size: 0.9rem;
          line-height: 1.4;
        }
      </style>

      <div class="carousel">
        <button class="arrow" type="button" aria-label="Anterior" data-direction="-1">
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6"></path>
          </svg>
        </button>

        <ul class="track"></ul>

        <button class="arrow" type="button" aria-label="Siguiente" data-direction="1">
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6"></path>
          </svg>
        </button>
      </div>
    `;

    const track = this.shadow.querySelector('.track');

    this.data.forEach((item) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const body = document.createElement('div');
      const title = document.createElement('h3');
      const text = document.createElement('p');

      li.classList.add('card');

      img.classList.add('card-image');
      img.src = item.src;
      img.alt = item.alt;

      body.classList.add('card-body');

      title.textContent = item.title;
      text.textContent = item.text;

    body.append(title, text);
    li.append(img, body);
    track.appendChild(li);
    });
  }

  addListeners() {
    const carousel = this.shadow.querySelector('.carousel');
    const track = this.shadow.querySelector('.track');

    carousel.addEventListener('click', (event) => {
      const arrow = event.target.closest('[data-direction]');

      if (!arrow) {
        return;
      }

      track.scrollBy({left: Number(arrow.dataset.direction) * track.clientWidth});
    });
  }
}

customElements.define('treatment-carousel-component', TreatmentCarousel);