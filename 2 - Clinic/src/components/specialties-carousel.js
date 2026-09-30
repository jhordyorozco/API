class SpecialtiesCarousel extends HTMLElement {
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
        alt: 'Mujer con dolor estomacal',
        src: './src/img/gastro.webp',
        text: 'Especialistas en bienestar intestinal. Líderes en el diagnóstico y tratamiento de SIBO, Helicobacter,Pylori y patologías gástricas con un enfoque integral y moderno.',
        title: 'Gastroenterología / Digestivo',
      },
      {
        alt: 'Mujer consultando en una videoconsulta',
        src: './src/img/medicina-general.webp',
        text: 'Tu punto de entrada a una salud ágil. Consultas en menos de 15 minutos para diagnósticos inmediatos, recetas electrónicas y coordinación directa con especialistas.',
        title: 'Medicina General y de Familia',
      },
      {
        alt: 'Profesional sanitario mostrando dos muestras de orina',
        src: './src/img/longevidad.webp',
        text: 'Expertos en tu salud a largo plazo. Abordaje especializado en edad biológica, biomarcadores y prevención de precisión para vivir más años con más salud, de forma monitorizada',
        title: 'Longevidad',
      },
      {
        alt: 'Doctora atendiendo una consulta por videollamada',
        src: './src/img/teleconsulta-cardio.webp',
        text: 'Acompañamiento experto para tu salud cardiovascular mediantes atención personalizada. Analizamos tu estado actual en consultas individuales para abordar la hipertensión, las arritmias o el riesgo cardíaco con precisión clínica y herramientas médicas adaptadas a ti.',
        title: 'Cardiología',
      },
      {
        alt: 'Mujer con una reacción alérgica en el hombro',
        src: './src/img/dermatologia.webp',
        text: 'Cuidado experto de tu piel y cabello mediante diagnóstico visual. Analizamos tus fotos en alta resolución para tratar acné, manchas o alopecia con precisión clínica.',
        title: 'Dermatología',
      },
      {
        alt: 'Mujer con un niño en videollamada con doctora',
        src: './src/img/pediatria.webp',
        text: 'La tranquilidad que necesitas para la salud de tus hijos. Consultas rápidas y cercanas para resolver dudas, procesos febriles y seguimiento infantil sin esperas.',
        title: 'Pediatría',
      },
      {
        alt: 'Psicologa en videollamada',
        src: './src/img/psicologia.webp',
        text: 'Acompañamiento experto para tu bienestar emocional mediante terapia personalizada. Analizamos tu situación actual en sesiones individuales para tratar la ansiedad, el estrés o los problemas de ánimo con precisión clínica y herramientas terapéuticas adaptadas a ti.',
        title: 'Psicología',
      },
      {
        alt: 'Mujer en videollamada con doctor',
        src: './src/img/endocrino.webp',
        text: 'Expertos en el equilibrio de tu metabolismo en tiroides, diabetes y nutrición clínica para mejorar tu calidad de vida de forma monitorizada',
        title: 'Endocrino',
      },
      {
        alt: 'Sala de cirugía',
        src: './src/img/trauma.webp',
        text: 'Acompañamiento experto para tu salud física y movilidad mediante diagnóstico especializado. Analizamos tu lesión o dolor articular a través de una evaluación clínica exhaustiva para tratar lumbalgias, patologías de columna o lesiones deportivas con precisión quirúrgica y planes de recuperación adaptados a ti.',
        title: 'Traumatología',
      },
      {
        alt: 'Rehabilitación',
        src: './src/img/rehabilitacion.webp',
        text: 'Acompañamiento experto para tu salud cardiovascular mediantes atención personalizada. Analizamos tu estado actual en consultas individuales para abordar la hipertensión, las arritmias o el riesgo cardíaco con precisión clínica y herramientas médicas adaptadas a ti.',
        title: 'Rehabilitación',
      },
      {
        alt: 'Nutrición',
        src: './src/img/nutricion.webp',
        text: 'Acompañamiento experto para tu bienestar integral mediante un plan nutricional a medida. Analizamos tu metabolismo, composición corporal y estilo de vida para tratar la inflamación, la gestión del peso o las intolerancias con precisión clínica y pautas nutricionales adaptadas a tus necesidades reales.',
        title: 'Nutrición',
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
      scrollbar-width: pointer;
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

customElements.define('specialties-carousel-component', SpecialtiesCarousel);