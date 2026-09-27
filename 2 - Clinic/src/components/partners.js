class Partners extends HTMLElement {
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
      badges: [
        {alt: 'GDPR', src: './src/img/gdpr.webp'},
        {alt: 'SSL Secured', src: './src/img/secure-ssl.webp'},
        {alt: 'Secure Payment', src: './src/img/secure-payment.webp'},
      ],
      subtitle: 'Expertos con trayectoria en los mejores hospitales y formación en instituciones de élite:',
      title: 'Líderes en telemedicina',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
      * {
        box-sizing: border-box;
        margin: 0;
      }

      .wrapper {
        background-color: hsla(0, 0%, 97%, 1.00);
        width: 100%;
      }

      section {
        display: grid;
        gap: 2rem;
        margin: 0 auto;
        max-width: 1120px;
        padding: 4rem 1rem;
        text-align: center;
      }

      h2 {
        font-size: clamp(1.5rem, 3vw, 2rem);
      }

      .subtitle {
        color: hsl(204, 88%, 19%);
      }

      ::slotted(logos-carousel-component) {
        display: block;
        min-width: 0;
        width: 100%;
      }

      .badges {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      .badges img {
        display: block;
        height: 3rem;
      }
    </style>

    <div class="wrapper">
  <section>
    <h2>${this.data.title}</h2>
    <p class="subtitle">${this.data.subtitle}</p>
    <slot></slot>
    <div class="badges"></div>
  </section>
</div>
  `;

  const badges = this.shadow.querySelector('.badges');

  this.data.badges.forEach((item) => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    badges.appendChild(img);
  });
}
}

customElements.define('partners-component', Partners);