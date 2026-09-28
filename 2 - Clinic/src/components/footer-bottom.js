class FooterBottom extends HTMLElement {
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
      copyright: '©2026 Clinica Digital',
      legalLinks: [
        {label: 'Aviso Legal', url: '#'},
        {label: 'Política de Privacidad', url: '#'},
        {label: 'Cookies', url: '#'},
      ],
      notice: 'Clínica Digital no vende ni dispensa medicamentos. Las consultas ofrecidas a través de nuestra plataforma son únicamente con fines de orientación médica general y están sujetas al criterio profesional del médico tratante.',
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

        .bar {
          align-items: center;
          background: hsl(0, 0%, 100%);
          color: hsl(210, 9%, 31%);
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          margin-top: 3rem;
          padding: 1rem;
        }

        .legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          list-style: none;
          padding: 0;
        }

        .legal-links a {
          align-items: center;
          color: hsl(210, 9%, 31%);
          display: flex;
          font-size: 0.9rem;
          gap: 0.4rem;
          text-decoration: none;
        }

        .legal-links a::before {
          color: hsl(38, 92%, 55%);
          content: '▸';
        }

        .notice {
          font-size: 0.85rem;
          line-height: 1.5;
          padding: 1.5rem 0 2rem;
        }
      </style>

      <div class="bar">
        <p>${this.data.copyright}</p>
        <ul class="legal-links"></ul>
      </div>

      <p class="notice"><strong>Aviso importante:</strong> ${this.data.notice}</p>
    `;

    const legalLinks = this.shadow.querySelector('.legal-links');

    this.data.legalLinks.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = item.url;
      a.textContent = item.label;

      li.appendChild(a);
      legalLinks.appendChild(li);
    });
  }
}

customElements.define('footer-bottom-component', FooterBottom);