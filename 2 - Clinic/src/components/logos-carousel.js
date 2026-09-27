class LogosCarousel extends HTMLElement {
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
      {alt: 'RFET - Real Federación Española de Tenis', src: './src/img/logo-rfet.webp'},
      {alt: 'Olympia - Grupo Quirónsalud', src: './src/img/logo-olympia.webp'},
      {alt: 'Salud - Servicio Aragonés de Salud', src: './src/img/logo-salud.webp'},
      {alt: 'Agencia Española de Medicamentos y Productos Sanitarios', src: './src/img/logo-aemps.webp'},
      {alt: 'Universidad de Zaragoza', src: './src/img/logo-unizar.webp'},
      {alt: 'Universidad Complutense de Madrid', src: './src/img/logo-ucm.webp'},
      {alt: 'Universidad de Barcelona', src: './src/img/logo-ub.webp'},
    ];
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
	<style>
		* {
			box-sizing: border-box;
			margin: 0;
		}

		.carousel {
				background: hsl(0, 0%, 100%);
				border-radius: 1rem;
				overflow: hidden;
				padding: 1.5rem 0;
				width: 100%;
		}

		.track {
				animation: carousel-scroll 25s linear infinite;
				display: flex;
				gap: 3rem;
				width: max-content;
		}

		.logo {
			align-items: center;
			display: flex;
			flex-shrink: 0;
		}

		.logo img {
			display: block;
			height: 5rem;
			width: auto;
		}

		@keyframes carousel-scroll {
			0% {
				transform: translateX(0);
			}

			100% {
				transform: translateX(-50%);
			}
		}
	</style>

	<div class="carousel">
		<div class="track"></div>
	</div>
`;

    const track = this.shadow.querySelector('.track');
    const doubled = [...this.data, ...this.data];

    doubled.forEach((item) => {
      const span = document.createElement('span');
      span.classList.add('logo');

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;

      span.appendChild(img);
      track.appendChild(span);
    });
  }
}

customElements.define('logos-carousel-component', LogosCarousel);