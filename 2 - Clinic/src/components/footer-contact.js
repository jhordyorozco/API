class FooterContact extends HTMLElement {
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
      email: 'recepcion@clinicadigital.com',
      social: [
        {alt: 'Instagram', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.2-.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z', url: '#'},
        {alt: 'LinkedIn', path: 'M4 4h4v4H4V4Zm0 6h4v10H4V10Zm7 0h4v1.6c.7-1.1 2-1.8 3.5-1.8 2.6 0 4.5 1.7 4.5 5.3V20h-4v-5.4c0-1.4-.6-2.2-1.7-2.2-1.1 0-2 .8-2.3 1.8V20h-4V10Z', url: '#'},
        {alt: 'TikTok', path: 'M13 3h3.2c.2 1.7 1.5 3 3.3 3.2V9c-1.4 0-2.6-.4-3.6-1.1V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.2a2.3 2.3 0 1 0 1.7 2.2V3Z', url: '#'},
        {alt: 'YouTube', path: 'M21 8.5s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.4 5.2 12 5.2 12 5.2s-3.4 0-6.1.2c-.4 0-1.3.1-2.1.9-.6.7-.8 2.2-.8 2.2S2.8 10.2 2.8 12v1.9c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.7.2 7.3.2 7.3.2s3.4 0 6.1-.2c.4 0 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.5V12c0-1.8-.2-3.5-.2-3.5ZM10 15.5v-6l5.2 3-5.2 3Z', url: '#'},
        {alt: 'Facebook', path: 'M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16.2 4.2 15.2 4 14 4c-2.4 0-4 1.5-4 4.1v2.4H7.5v3H10V21h3.5Z', url: '#'},
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

        h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .email {
          align-items: center;
          color: hsl(0, 0%, 100%);
          display: flex;
          font-size: 0.9rem;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          text-decoration: none;
        }

        .email-icon {
          fill: none;
          flex-shrink: 0;
          height: 1.1rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.1rem;
        }

        .social {
          display: flex;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .social a {
          align-items: center;
          background: hsla(0, 0%, 100%, 0.1);
          border-radius: 0.4rem;
          color: hsl(0, 0%, 100%);
          display: grid;
          height: 2.2rem;
          justify-items: center;
          width: 2.2rem;
        }

        .social-icon {
          fill: currentColor;
          height: 1rem;
          width: 1rem;
        }
      </style>

      <h3>Contacto</h3>
      <a class="email" href="mailto:${this.data.email}">
        <svg class="email-icon" viewBox="0 0 24 24">
          <path d="M4 6h16v12H4z"></path>
          <path d="m4 7 8 6 8-6"></path>
        </svg>
        ${this.data.email}
      </a>
      <div class="social"></div>
      <omc-badge-component></omc-badge-component>
    `;

    const social = this.shadow.querySelector('.social');

    this.data.social.forEach((item) => {
      const a = document.createElement('a');
      a.href = item.url;
      a.setAttribute('aria-label', item.alt);

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('social-icon');
      svg.setAttribute('viewBox', '0 0 24 24');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', item.path);

      svg.appendChild(path);
      a.appendChild(svg);
      social.appendChild(a);
    });
  }
}

customElements.define('footer-contact-component', FooterContact);