class HeroContent extends HTMLElement {
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
      buttons: [
        {label: 'Hablar con un médico ahora', primary: true, url: '#contacto'},
        {label: 'Ver especialidades', primary: false, url: '#especialidades'},
      ],
      eyebrow: 'Te atendemos en menos de 15 minutos.',
      highlight: 'Más de 20.000 pacientes confían en Clínica Digital.',
      rating: {
        alt: 'Valoración 5.0 en Google',
        src: './src/img/rating.webp',
        text: 'Basado en más de 1.000 reseñas de Google',
      },
      text: 'Tu salud integral en un solo lugar: desde medicina general y pedriatría hasta la gestión inmediata de tus recetas, informes o análisis, y mucho más. Todo lo que tu familia necesita, sin salir de casa.',
      title: 'Tu médico online de confianza: Cita Médica Online sin Esperas.',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .contenido {
          display: grid;
          gap: 1rem;
          width: 100%;
        }

        .eyebrow {
          font-size: 1rem;
          font-weight: 400;
        }

        h1 {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          line-height: 1.2;
        }

        .text {
          color: hsl(0, 0%, 100%);
          font-size: 1rem;
          line-height: 1.6;
          max-width: 34rem;
        }

        .botones {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        a {
          border: 1px solid hsl(0, 0%, 100%);
          border-radius: 0.3rem;
          color: hsl(0, 0%, 100%);
          padding: 1rem;
          text-decoration: none;
          font-weight: 800;
        }

        .highlight {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .boton-principal {
          background: hsl(213, 76%, 55%);
          border-color: hsl(213, 76%, 55%);
        }

        .rating {
          align-items: center;
          display: flex;
          gap: 0.75rem;
        }

        .rating-image {
          display: block;
          width: 8rem;
          border-radius: 0.3rem;
        }

        .rating-text {
          color: hsl(0, 0%, 100%);
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.3;
          max-width: 12rem;
        }
      </style>

      <div class="contenido">
        <p class="eyebrow">${this.data.eyebrow}</p>
        <h1>${this.data.title}</h1>
        <p class="text">${this.data.text}</p>
        <p class="highlight">${this.data.highlight}</p>
        <div class="botones"></div>
        <div class="rating">
          <img class="rating-image" src="${this.data.rating.src}" alt="${this.data.rating.alt}">
          <p class="rating-text">${this.data.rating.text}</p>
        </div>
      </div>
    `;

    const botones = this.shadow.querySelector('.botones');

    this.data.buttons.forEach((item) => {
      const a = document.createElement('a');

      if (item.primary) {
        a.classList.add('boton-principal');
      }

      a.href = item.url;
      a.textContent = item.label;

      botones.appendChild(a);
    });
  }
}

customElements.define('hero-content-component', HeroContent);