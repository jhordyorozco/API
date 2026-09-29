class FaqContent extends HTMLElement {
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
    this.data = {
      title: 'Preguntas frecuentes sobre Clínica Digital.',
      items: [
        {
          question: '¿Estáis disponibles las 24 horas del día?',
          answer: '<strong>Sí, nuestro servicio de medicina general online está disponible 24/7 para emergencias y consultas inmediatas.</strong> Para el resto de especialidades médicas, puedes reservar fácilmente tu cita online para el día siguiente o en el momento que mejor te convenga, según la disponibilidad del especialista.',
        },
        {
          question: '¿Cómo recibiré mi receta médica electrónica?',
          answer: 'Tras finalizar tu consulta, si el <strong>médico online</strong> considera necesario un tratamiento, recibirás tu <strong>receta médica electrónica</strong> oficial directamente en tu zona privada y por correo electrónico. Nuestras recetas son privadas y legales, válidas en cualquier farmacia de España.',
        },
        {
          question: '¿Son válidas vuestras recetas en cualquier farmacia?',
          answer: 'Sí. Nuestras recetas médicas privadas son emitidas por médicos colegiados en España. Son válidos cualquier farmacia. Las recibirás de forma digital en tu área privada tras la consulta.',
        },
        {
          question: '¿Emitís informes médicos o justificantes?',
          answer: 'Sí. Aunque <strong>no emitimos bajas laborales</strong> de la Seguridad Social, tras cada consulta de <strong>telemedicina</strong> el profesional redactará un informe clínico detallado con el diagnóstico y el plan de tratamiento. También podemos emitir justificantes de asistencia médica si lo necesitas para tu empresa o centro de estudios.',
        },
        {
          question: '¿Cómo se garantiza la privacidad de mis datos de salud?',
          answer: 'Cumplimos estrictamente con el RGPD y la normativa sanitaria vigente. Todas las consultas y datos están protegidos mediante sistemas de cifrado seguro. Tu información médica es confidencial y solo accesible por profesionales autorizados.',
        },
        {
          question: '¿Puedo mostrar mis analíticas o pruebas previas al médico?',
          answer: 'Por supuesto. Durante tu <strong>cita médico online</strong>, puedes subir documentos, fotos o resultados de análisis de sangre previos para que el especialista los revise en tiempo real y pueda darte un diagnóstico mucho más preciso.',
        },
        {
          question: '¿Es posible realizar la consulta en inglés?',
          answer: '<strong>Sí, por supuesto.</strong> Contamos con un <strong>equipo médico bilingüe</strong> preparado para realizar la consulta íntegramente en inglés si así lo prefieres. Este servicio es ideal para residentes extranjeros, turistas de paso por España o si simplemente te sientes más cómodo comunicándote en este idioma para explicar tus síntomas.',
        },
      ],
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
          gap: 1rem;
        }

        h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          line-height: 1.1;
        }

        p {
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .accordion {
          display: grid;
          gap: 0.6rem;
        }

        .item {
          border-radius: 0.4rem;
          overflow: hidden;
        }

        .item-header {
          align-items: center;
          background: hsl(208, 100%, 17%);
          border: none;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          display: grid;
          font-size: 0.9rem;
          font-weight: 600;
          gap: 1rem;
          grid-template-columns: auto 1fr;
          padding: 1rem;
          text-align: left;
          width: 100%;
        }

        .item-icon {
          fill: none;
          height: 1.5rem;
          stroke: currentColor;
          stroke-width: 2;
          transition: transform 0.3s ease;
          width: 1.5rem;
        }

        .item-body {
          background: hsl(0, 0%, 100%);
          display: none;
          padding: 1rem;
        }

        .is-open .item-header {
          background: hsl(213, 76%, 55%);
        }

        .is-open .item-icon {
          transform: rotate(180deg);
        }

        .is-open .item-body {
          display: block;
        }
      </style>

      <section>
        <h2>${this.data.title}</h2>

        <div class="accordion">
          ${this.data.items.map((item, index) =>`
            <div class="item ${index === 0 ? 'is-open' : ''}">
              <button class="item-header" type="button" data-toggle aria-expanded="${index === 0}">
                <svg class="item-icon" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                ${item.question}
              </button>
              <div class="item-body">
                <p>${item.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  addListeners() {
    const accordion = this.shadow.querySelector('.accordion');

    accordion.addEventListener('click', (event) => {
      const header = event.target.closest('[data-toggle]');

      if (!header) {
        return;
      }

      const item = header.parentElement;
      const wasOpen = item.classList.contains('is-open');

      this.closeAll();

      if (!wasOpen) {
        item.classList.add('is-open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  }

  closeAll() {
    this.shadow.querySelectorAll('.item').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('[data-toggle]').setAttribute('aria-expanded', 'false');
    });
  }
}

customElements.define('faq-content-component', FaqContent);