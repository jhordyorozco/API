class Chats extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadData();
    this.render();

    document.addEventListener('toggleMenu', () => {
      this.shadow.querySelector('.chats').classList.toggle('active')
    })
  }

  loadData() {
    this.data = [
      { label: 'El concepto de la angustia y la existencia en Martin Heidegger', status: "pinned" },
      { label: 'Mejores destinos para viajar en autocaravana por Europa en otoño', status: "pinned" },
      { label: 'Curiosidades científicas sobre el comportamiento de los agujeros negros', status: null },
      { label: '¿Qué es el absurdo según Albert Camus en El mito de Sísifo?', status: null },
      { label: 'Diferencias principales entre el estoicismo de Marco Aurelio y el epicureísmo', status: null },
      { label: 'Frases célebres de Friedrich Nietzsche sobre la moral y el superhombre', status: null },
      { label: 'El mito de la caverna de Platón y su aplicación en la actualidad', status: null },
      { label: '¿Cómo influyó Immanuel Kant en la epistemología moderna?', status: null },
      { label: 'El existencialismo de Jean-Paul Sartre y la libertad humana', status: null },
      { label: 'Ética de Spinoza y su visión panteísta de Dios y la naturaleza', status: null },
      { label: 'Filosofía oriental: enseñanzas esenciales del taoísmo y Lao-Tsé', status: null },
      { label: 'La dialéctica de Hegel y su impacto en el pensamiento histórico', status: null },
      { label: 'Cómo optimizar consultas SQL para bases de datos grandes', status: "pinned" },
      { label: '¿Qué es la fenomenología y cuáles son los aportes de Edmund Husserl?', status: "pinned" },
      { label: 'El existencialismo de Jean-Paul Sartre y la libertad humana', status: null },
      { label: 'Simone de Beauvoir y los fundamentos del feminismo existencialista', status: null },
      { label: 'El utilitarismo de John Stuart Mill frente a la ética deontológica', status: null },
      { label: 'Zenón de Elea y las paradojas del movimiento y el infinito', status: null },
      { label: 'Filosofía presocrática: el arché y los primeros físicos de Mileto', status: null },
      { label: 'El concepto de "ataraxia" y la búsqueda de la tranquilidad mental', status: null },
      { label: 'La deconstrucción y el pensamiento crítico de Jacques Derrida', status: null },
      { label: 'Baruch Spinoza y la libertad de expresión en el Tratado Teológico-Político', status: null },
    ]
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        .chats{
          display: flex;
          flex-direction: column;
          height: 85vh;
          max-height: 85vh;
          overflow: hidden;
        }
        .new-chat {
          align-items: center;
          background: hsl(39, 30%, 70%);
          border: 1px solid hsl(39, 21%, 58%);
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0.6rem;
          justify-content: flex-start;
          overflow: hidden;
          padding: 0.7rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .new-chat:hover {
          background: hsl(39, 25%, 66%);
        }

        .new-chat-icon {
          fill: none;
          flex-shrink: 0;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1.2rem;
        }

        .label {
          display: none;
        }

        .chats.active .label {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        .chats.active .chats-link:hover .label {
          animation: chat-scroll 5s linear infinite;
        }

        @keyframes chat-scroll {
        0% {
          transform: translateX(0);
        }

        40% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-50%);
        }
      }

        .chats-scroll {
          border-block: 1px solid hsl(39, 21%, 58%);
          flex: 1;
          min-height: 0;
          overflow-x: hidden;
          overflow-y: auto;
          padding-block: 0.5rem;
          scrollbar-width: none;
        }

        .chats-section {
          flex-shrink: 0;
          overflow: hidden;
        }

        .chats-title {
          color: hsl(34, 17%, 39%);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.3rem;
        }

        .chats-link {
          align-items: center;
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0;
          height: 2.4rem;
          overflow: hidden;
          padding-inline: 0.6rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .chats-link:hover {
          background: hsl(40, 29%, 71%);
        }

        .chats-link-icon {
          fill: none;
          height: 1rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1rem;
        }

        .chats-list {
          display: grid;
          gap: 0.3rem;
          list-style: none;
          padding: 0;
        }
      </style>

      <div class="chats">
        <a class="new-chat" href="#">
          <svg class="new-chat-icon" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          <span class="label">Nuevo chat</span>
        </a>
        <nav class="chats-section">
          <div class="chats-title label">Fijado</div>
          <ul class="chats-list pinned"></ul>
        </nav>

        <nav class="chats-section">
          <div class="chats-title label">Recientes</div>
          <div class="chats-scroll">
            <ul class="chats-list recent"></ul>
          </div>
        </nav>
      </div>
    `;

    this.data.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const span = document.createElement('span');

      a.innerHTML = item.status === 'pinned' ?
        `<svg class="chats-link-icon" viewBox="0 0 24 24">
          <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"></path>
        </svg>`
        :
        `<svg class="chats-link-icon" viewBox="0 0 24 24">
          <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
        </svg>`;

      a.classList.add('chats-link');
      a.href = '#';

      span.classList.add('label');
      span.textContent = item.label;

      a.appendChild(span);
      li.appendChild(a);

      item.status === 'pinned' ? this.shadow.querySelector('.chats-list.pinned').appendChild(li) : this.shadow.querySelector('.chats-list.recent').appendChild(li)
    })

  }
}

customElements.define('chats-component', Chats);