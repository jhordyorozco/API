class Hero extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = 
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        section {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 320px), 1fr)
          );
          align-items: center;
          gap: 3rem;
          max-width: 1120px;
          min-height: 80vh;
          margin: 0 auto;
          padding: 2rem 1rem;
          background: #06395b;
          color: white;
        }

        :host {
          display: block;
          background: #06395b;
        }
        
        .contenido {
          display: grid;
          gap: 1rem;
        }

        h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
        }

        .botones {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }

        a {
          padding: 0.85rem 1rem;
          border: 1px solid white;
          border-radius: 0.3rem;
          color: white;
          text-decoration: none;
        }

        .boton-principal {
          border-color: #2585e5;
          background: #2585e5;
        }

        img {
          display: block;
          width: 100%;
          border: 0.4rem solid white;
          border-radius: 1rem;
        }
      </style>

      <section aria-labelledby="hero-titulo">
        <div class="contenido">
          <p>Te atendemos en menos de 15 minutos.</p>

          <h1 id="hero-titulo">
            Tu médico online de confianza
          </h1>

          <p>
            Tu salud integral en un solo lugar. Consulta con profesionales
            y gestiona tus recetas e informes desde casa.
          </p>

          <p><strong>Más de 20.000 pacientes confían en Clínica Digital.</strong></p>

          <div class="botones">
            <a class="boton-principal" href="#contacto">
              Hablar con un médico ahora
            </a>
            <a href="#especialidades">Ver especialidades</a>
          </div>
        </div>

        <img src="./medicos.jpg" alt="Equipo de profesionales médicos">
      </section>
    `;
  }
}

customElements.define("hero-component", Hero);