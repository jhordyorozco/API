export class BoxPrompt extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
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

        :host {
          display: block;
          height: 100vh;
        }

        h1 {
          align-self: center;
          font-size: clamp(1.8rem, 40px, 2.8rem);
          justify-self: center;
          text-align: center;
        }

        .prompt {
          display: grid;
          grid-template-rows: 1fr auto;
          height: 100%;
          min-width: 0;
          padding: clamp(1rem, 40px, 2rem);
        }

        .prompt__box {
          align-items: center;
          background: hsl(41, 44%, 93%);
          border: 1px solid hsl(39, 20%, 57%);
          border-radius: 0.8rem;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: auto 1fr auto;
          margin: 0 auto;
          max-width: 48rem;
          padding: 0.7rem;
          width: min(100%, 48rem);
        }

        .prompt__input {
          background: transparent;
          border: none;
          color: hsl(33, 17%, 20%);
          font-family: inherit;
          font-size: 1.05rem;
          min-width: 0;
          outline: none;
          width: 100%;
        }

        .prompt__input::placeholder {
          color: hsl(37, 12%, 49%);
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

        .icon-btn__icon {
          fill: none;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 1.7;
          width: 1.2rem;
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

        .send-btn__icon {
          fill: none;
          height: 1rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1rem;
        }
      </style>

      <div class="prompt">
        <h1><slot name="title">Bienvenido mi hermano</slot></h1>
        <div class="prompt__box">
          <button class="icon-btn" type="button" aria-label="Adjuntar">
            <svg class="icon-btn__icon" viewBox="0 0 24 24">
              <path d="M17.5 8.5 9.6 16.4a2.5 2.5 0 0 1-3.5-3.5l8.3-8.3a4 4 0 1 1 5.7 5.7L11.7 18.7a5.5 5.5 0 0 1-7.8-7.8L12.5 2.3"></path>
            </svg>
          </button>
          <input class="prompt__input" type="text" placeholder="Qué vaina necesitáis que te resuelva hoy?">
          <button class="send-btn" type="button" aria-label="Enviar">
            <svg class="send-btn__icon" viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('box-prompt', BoxPrompt);
