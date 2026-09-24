export class AppMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
    this.bindToggle();
  }

  loadData() {
    this.data = {
      user: {
        initials: 'JO',
        name: 'Jhordy Orozco',
        plan: 'Admin',
      },
      pinned: [
        { name: 'Pagar menos impuesto Hacienda', url: '#' },
        { name: 'Tutorial para ser millonario', url: '#' },
      ],
      recent: [
        { name: 'Como ganar la lotería', url: '#' },
        { name: 'Colores Vintage', url: '#' },
        { name: 'Como farmear Aura', url: '#' },
        { name: 'Regulación masiva', url: '#' },
        { name: 'Trucos GTA', url: '#' },
        { name: 'Hackear Wifi', url: '#' },
        { name: 'Oliva o aceituna?', url: '#' },
        { name: 'Calcular impuesto', url: '#' },
        { name: 'Edita foto con musculos', url: '#' },
        { name: 'Preparar Shandy', url: '#' },
        { name: 'Tasa dolar a bs', url: '#' },
      ],
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

        :host {
          display: block;
          height: 100%;
          max-width: 18rem;
          transition: width 0.3s;
          width: 100%;
        }

        @media (max-width: 36rem) {
          :host {
            height: 100dvh;
            left: 0;
            max-width: 18rem;
            position: fixed;
            top: 0;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            width: min(18rem, 85vw);
            z-index: 10;
          }

          :host([open]) { transform: translateX(0); }
          :host([collapsed]) { max-width: 18rem; width: min(18rem, 85vw); }
          .side-menu { box-shadow: 0 0 1.5rem rgb(0 0 0 / 18%); }
          .side-menu__backdrop { display: none; }
          :host([open]) .side-menu__backdrop {
            background: rgb(0 0 0 / 35%);
            border: 0;
            display: block;
            height: 100dvh;
            left: 100%;
            position: fixed;
            top: 0;
            width: 100vw;
          }
        }

        :host([collapsed]) {
          max-width: 4.2rem;
          width: 4.2rem;
        }

        :host([collapsed]) .side-menu__label {
          max-width: 0;
          opacity: 0;
        }

        :host([collapsed]) .side-menu__top {
          grid-template-columns: 1fr;
        }

        :host([collapsed]) .side-menu__link,
        :host([collapsed]) .new-chat,
        :host([collapsed]) .brand {
          gap: 0;
          justify-content: center;
          padding-inline: 0;
        }

        :host([collapsed]) .side-menu__section--scroll {
          overflow: hidden;
        }

        .side-menu {
          background: hsl(39, 33%, 77%);
          border-right: 1px solid hsl(39, 20%, 57%);
          display: grid;
          gap: 1rem;
          grid-template-rows: auto auto auto 1fr auto;
          height: 100%;
          overflow: hidden;
          padding: clamp(0.6rem, 2vw, 1rem);
          width: 100%;
        }

        .side-menu__backdrop {
          display: none;
        }

        .side-menu__top {
          align-items: center;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 1fr auto;
        }

        .side-menu__section {
          overflow: hidden;
        }

        .side-menu__section--scroll {
          max-height: 19rem;
          min-height: 0;
          overflow-y: auto;
          scrollbar-color: hsl(39, 25%, 66%) hsl(39, 21%, 58%);
          scrollbar-width: thin;
        }

        .side-menu__list {
          display: grid;
          gap: 0.2rem;
          list-style: none;
        }

        .side-menu__title {
          color: hsl(34, 17%, 39%);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.3rem;
        }

        .side-menu__link {
          align-items: center;
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.6rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .side-menu__link:hover {
          background: hsl(40, 29%, 71%);
        }

        .side-menu__icon {
          fill: none;
          flex-shrink: 0;
          height: 1.1rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.1rem;
        }

        .side-menu__label {
          max-width: 12rem;
          opacity: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        .side-menu__user {
          align-items: center;
          border-top: 1px solid hsl(39, 21%, 58%);
          display: flex;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.7rem 0.3rem;
        }

        .side-menu__user-info {
          overflow: hidden;
        }

        .side-menu__user-name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .side-menu__user-plan {
          color: hsl(34, 17%, 39%);
          display: block;
          font-size: 0.75rem;
        }

        .brand {
          align-items: center;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          font: inherit;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.4rem;
          white-space: nowrap;
        }

        .brand:hover {
          background: hsl(40, 29%, 71%);
        }

        .brand__icon {
          fill: none;
          flex-shrink: 0;
          height: 1.5rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.5rem;
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

        .icon-btn:hover {
          background: hsl(40, 29%, 71%);
        }

        .icon-btn__icon {
          fill: none;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 1.7;
          width: 1.2rem;
        }

        .new-chat {
          align-items: center;
          background: hsl(39, 30%, 70%);
          border: 1px solid hsl(39, 21%, 58%);
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.7rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .new-chat:hover {
          background: hsl(39, 25%, 66%);
        }

        .new-chat__icon {
          fill: none;
          flex-shrink: 0;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1.2rem;
        }

        .avatar {
          align-items: center;
          background: hsl(36, 24%, 44%);
          border-radius: 50%;
          color: hsl(0, 0%, 100%);
          display: grid;
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: bold;
          height: 2rem;
          justify-items: center;
          width: 2rem;
        }
      </style>

      <aside class="side-menu">
        <button class="side-menu__backdrop" type="button" aria-label="Cerrar menú"></button>
        <div class="side-menu__top">
          <button class="brand" type="button" aria-label="Colapsar menú">
            <svg class="brand__icon" viewBox="0 0 24 24">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z"></path>
            </svg>
            <span class="side-menu__label">Sendo Beta</span>
          </button>
          <button class="icon-btn" type="button" aria-label="Buscar">
            <svg class="icon-btn__icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5L20.5 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
            </svg>
          </button>
        </div>

        <a class="new-chat" href="#">
          <svg class="new-chat__icon" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          <span class="side-menu__label">Nuevo chat</span>
        </a>

        <nav class="side-menu__section">
          <ul class="side-menu__list side-menu__list--pinned">
            <li class="side-menu__title side-menu__label">Fijado</li>
          </ul>
        </nav>

        <nav class="side-menu__section side-menu__section--scroll">
          <ul class="side-menu__list side-menu__list--recent">
            <li class="side-menu__title side-menu__label">Recientes</li>
          </ul>
        </nav>

        <div class="side-menu__user side-menu__label">
          <div class="avatar">${this.data.user.initials}</div>
          <div class="side-menu__user-info">
            <span class="side-menu__user-name">${this.data.user.name}</span>
            <span class="side-menu__user-plan">${this.data.user.plan}</span>
          </div>
        </div>
      </aside>
    `;

    this.renderList('.side-menu__list--pinned', this.data.pinned, 'M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z');
    this.renderList('.side-menu__list--recent', this.data.recent, 'M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z');
  }

  renderList(selector, items, iconPath) {
    const list = this.shadow.querySelector(selector);

    items.forEach(item => {
      const entry = document.createElement('li');

      entry.innerHTML =
      /* html */ `
        <a class="side-menu__link" href="${item.url}">
          <svg class="side-menu__icon" viewBox="0 0 24 24">
            <path d="${iconPath}"></path>
          </svg>
          <span class="side-menu__label">${item.name}</span>
        </a>
      `;

      list.appendChild(entry);
    });
  }

  bindToggle() {
    const toggleButton = this.shadow.querySelector('.brand');
    toggleButton.addEventListener('click', () => {
      this.toggleAttribute('collapsed');
    });
    document.addEventListener('chat-menu-toggle', event => {
      this.toggleAttribute('open', event.detail.open);
    });
    this.shadow.querySelector('.side-menu__backdrop').addEventListener('click', () => {
      this.removeAttribute('open');
      document.dispatchEvent(new CustomEvent('chat-menu-toggle', { detail: { open: false } }));
    });
  }
}

customElements.define('app-menu', AppMenu);
