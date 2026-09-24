class BoxPrompt extends HTMLElement {
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
      greeting: 'Bienvenido mi hermano',
      placeholder: 'Qué vaina necesitáis que te resuelva hoy?',
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

        h1 {
          align-self: center;
          font-size: clamp(1.5rem, 5vw, 2.8rem);
          justify-self: center;
          line-height: 1.15;
          overflow-wrap: anywhere;
          text-align: center;
        }

        .icon-btn {
          align-items: center;
          background: transparent;
          border: none;
          border-radius: 0.4rem;
          color: inherit;
          cursor: pointer;
          display: grid;
          height: 2.3rem;
          justify-items: center;
          width: 2.3rem;
        }

        .icon-btn-icon {
          fill: none;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 1.7;
          width: 1.2rem;
        }

        .page {
          display: grid;
          grid-template-rows: 1fr auto;
          height: 100dvh;
          min-width: 0;
          padding: clamp(1rem, 5vw, 2rem);
          padding-inline-start: calc(4.2rem + clamp(1rem, 5vw, 2rem));
          width: 100%;
        }

        .header {
          align-items: center;
          display: flex;
          justify-content: center;
          min-width: 0;
        }

        .box {
          align-items: center;
          background: hsl(41, 44%, 93%);
          border: 1px solid hsl(39, 20%, 57%);
          border-radius: 0.8rem;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: auto 1fr auto;
          margin: 0 auto;
          max-width: 48rem;
          padding: clamp(0.45rem, 2vw, 0.7rem);
          width: min(100%, 48rem);
        }

        .input {
          background: transparent;
          border: none;
          color: hsl(33, 17%, 20%);
          font-family: inherit;
          font-size: clamp(0.95rem, 2.5vw, 1.05rem);
          min-width: 0;
          outline: none;
          width: 100%;
        }

        .input::placeholder {
          color: hsl(37, 12%, 49%);
        }

        .send-btn {
          align-items: center;
          background: hsl(36, 24%, 44%);
          border: none;
          border-radius: 50%;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          display: grid;
          height: 2.3rem;
          justify-items: center;
          width: 2.3rem;
        }

        .send-btn:hover {
          background: hsl(34, 26%, 36%);
        }

        .send-icon {
          fill: none;
          height: 1rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1rem;
        }
      </style>

      <div class="page">
        <div class="header">
          <h1>${this.data.greeting}</h1>
        </div>
        <div class="box">
          <button class="icon-btn" type="button" aria-label="Adjuntar">
            <svg class="icon-btn-icon" viewBox="0 0 24 24">
              <path d="M17.5 8.5 9.6 16.4a2.5 2.5 0 0 1-3.5-3.5l8.3-8.3a4 4 0 1 1 5.7 5.7L11.7 18.7a5.5 5.5 0 0 1-7.8-7.8L12.5 2.3"></path>
            </svg>
          </button>
          <input class="input" type="text" placeholder="${this.data.placeholder}">
          <button class="send-btn" type="button" aria-label="Enviar">
            <svg class="send-icon" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('box-prompt', BoxPrompt);