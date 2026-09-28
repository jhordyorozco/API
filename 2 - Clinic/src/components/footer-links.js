class FooterLinks extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
  }

  loadData() {
    this.data = [
      {
        items: [
          {label: 'Medicina General 24/7', url: '#'},
          {label: 'Pediatría', url: '#'},
          {label: 'Endocrino', url: '#'},
          {label: 'Dermatología', url: '#'},
          {label: 'Digestivo', url: '#'},
          {label: 'Nutricionista', url: '#'},
          {label: 'Psicología', url: '#'},
          {label: 'Traumatología', url: '#'},
        ],
        title: 'Especialidades:',
      },
      {
        items: [
          {label: 'SIBO', url: '#'},
          {label: 'Migrañas y Cefaleas', url: '#'},
          {label: 'Cistitis', url: '#'},
          {label: 'Migraña', url: '#'},
          {label: 'Helicobacter Pylori', url: '#'},
          {label: 'Tratamiento Alopecia', url: '#'},
          {label: 'Asma', url: '#'},
          {label: 'Reacción Alérgica', url: '#'},
        ],
        title: 'Condiciones:',
      },
      {
        items: [
          {label: 'Recetas Médicas Online', url: '#'},
          {label: 'Tratamiento Anticonceptivo', url: '#'},
          {label: 'Medicina del Viajero', url: '#'},
        ],
        title: 'Servicios Médicos',
      },
      {
        items: [
          {label: 'Planes de Salud', url: '#'},
          {label: 'Quienes Somos', url: '#'},
          {label: 'Especialistas', url: '#'},
          {label: 'Cómo Funciona', url: '#'},
          {label: 'Contacto', url: '#'},
        ],
        title: 'Sobre Nosotros',
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

        .columns {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr));
        }

        h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .list {
          display: grid;
          gap: 0.6rem;
          list-style: none;
          padding: 0;
        }

        .list a {
          align-items: center;
          color: hsl(0, 0%, 100%);
          display: flex;
          font-size: 0.9rem;
          gap: 0.5rem;
          text-decoration: none;
        }

        .list a::before {
          color: hsl(38, 92%, 55%);
          content: '▸';
        }
      </style>

      <div class="columns"></div>
    `;

    const columns = this.shadow.querySelector('.columns');

    this.data.forEach((column) => {
      const div = document.createElement('div');
      const title = document.createElement('h3');
      const list = document.createElement('ul');

      title.textContent = column.title;
      list.classList.add('list');

      column.items.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = item.url;
        a.textContent = item.label;

        li.appendChild(a);
        list.appendChild(li);
      });

      div.append(title, list);
      columns.appendChild(div);
    });
  }
}

customElements.define('footer-links-component', FooterLinks);