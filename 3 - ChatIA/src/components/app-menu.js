class AppMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.loadData();
    this.render();
    this.addListeners();
  }

  loadData() {
    this.data = {
      user: {
        initials: 'JO',
        name: 'Jhordy Orozco',
        plan: 'Admin',
      },
      pinned: [
        {name: 'Pagar menos impuesto Hacienda', url: '#'},
        {name: 'Tutorial para ser millonario', url: '#'},
      ],
      recent: [
        {name: 'Como ganar la lotería', url: '#'},
        {name: 'Colores Vintage', url: '#'},
        {name: 'Como farmear Aura', url: '#'},
        {name: 'Regulación masiva', url: '#'},
        {name: 'Trucos GTA', url: '#'},
        {name: 'Hackear Wifi', url: '#'},
        {name: 'Oliva o aceituna?', url: '#'},
        {name: 'Calcular impuesto', url: '#'},
        {name: 'Edita foto con musculos', url: '#'},
        {name: 'Preparar Shandy', url: '#'},
        {name: 'Tasa dolar a bs', url: '#'},
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

        .backdrop {
          background: hsla(0, 0%, 0%, 0);
          border: 0;
          display: none;
          height: 100dvh;
          left: 0;
          position: fixed;
          top: 0;
          transition: background 0.2s ease;
          width: 100vw;
        }

        .backdrop.is-open {
          background: hsla(0, 0%, 0%, 0.35);
          display: block;
        }

        .brand {
          align-items: center;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          font: inherit;
          gap: 0;
          justify-content: center;
          overflow: hidden;
          padding: 0.4rem;
          white-space: nowrap;
        }

        .brand:hover {
          background: hsl(40, 29%, 71%);
        }

        .brand-icon {
          fill: none;
          flex-shrink: 0;
          height: 1.6rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.6rem;
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

        .icon-btn-icon {
          fill: none;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 1.7;
          width: 1.2rem;
        }

        .link {
          align-items: center;
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0;
          height: 2.4rem;
          justify-content: center;
          overflow: hidden;
          padding-inline: 0.6rem;
          text-decoration: none;
          white-space: nowrap;
        }

        .link:hover {
          background: hsl(40, 29%, 71%);
        }

        .link-icon {
          fill: none;
          flex-shrink: 0;
          height: 1.1rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.1rem;
        }

        .list {
          display: grid;
          gap: 0.2rem;
          list-style: none;
          padding: 0;
        }

        .menu {
          background: hsl(39, 33%, 77%);
          border-right: 1px solid hsl(39, 20%, 57%);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100dvh;
          left: 0;
          overflow: hidden;
          padding: clamp(0.5rem, 3vw, 0.8rem);
          position: fixed;
          top: 0;
          transition: width 0.25s ease, box-shadow 0.25s ease;
          width: 4.2rem;
          z-index: 10;
        }

        .menu.is-open {
          box-shadow: 0 0 1.5rem hsla(0, 0%, 0%, 0.25);
          width: min(18rem, 85vw);
        }

        .menu.is-open .top {
          grid-template-columns: 1fr auto;
        }

        .menu.is-open .brand,
        .menu.is-open .new-chat,
        .menu.is-open .link {
          gap: 0.6rem;
          justify-content: flex-start;
          padding-inline: 0.6rem;
        }

        .menu.is-open .label {
          max-width: 12rem;
          opacity: 1;
        }

        .new-chat {
          align-items: center;
          background: hsl(39, 30%, 70%);
          border: 1px solid hsl(39, 21%, 58%);
          border-radius: 0.4rem;
          color: inherit;
          display: flex;
          gap: 0;
          justify-content: center;
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
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        .scroll {
          border-block: 1px solid hsl(39, 21%, 58%);
          flex-shrink: 0;
          max-height: calc(2.4rem * 8 + 0.2rem * 7);
          overflow-y: auto;
          padding-block: 0.3rem;
          scrollbar-color: hsl(39, 25%, 66%) hsl(39, 21%, 58%);
          scrollbar-width: thin;
        }

        .section {
          flex-shrink: 0;
          overflow: hidden;
        }

        .title {
          color: hsl(34, 17%, 39%);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.3rem;
        }

        .top {
          align-items: center;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 1fr;
        }

        .user {
          align-items: center;
          border-top: 1px solid hsl(39, 21%, 58%);
          display: flex;
          flex-shrink: 0;
          gap: 0.6rem;
          justify-content: center;
          margin-top: auto;
          overflow: hidden;
          padding: 0.7rem 0.3rem;
        }

        .menu.is-open .user {
          justify-content: flex-start;
        }

        .user-info {
          overflow: hidden;
        }

        .user-name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .user-plan {
          color: hsl(34, 17%, 39%);
          display: block;
          font-size: 0.75rem;
        }
      </style>

      <button class="backdrop" type="button" aria-label="Cerrar menú" data-action="close"></button>

      <aside class="menu">
        <div class="top">
          <button class="brand" type="button" aria-label="Abrir menú" aria-expanded="false" data-action="toggle">
            <svg class="brand-icon" viewBox="0 0 24 24">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z"></path>
            </svg>
            <span class="label">Sendo Beta</span>
          </button>
          <button class="icon-btn" type="button" aria-label="Buscar">
            <svg class="icon-btn-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5L20.5 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
            </svg>
          </button>
        </div>

        <a class="new-chat" href="#">
          <svg class="new-chat-icon" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          <span class="label">Nuevo chat</span>
        </a>

        <nav class="section">
          <ul class="list list-pinned">
            <li class="title label">Fijado</li>
          </ul>
        </nav>

        <nav class="section">
          <div class="title label">Recientes</div>
          <div class="scroll">
            <ul class="list list-recent"></ul>
          </div>
        </nav>

        <div class="user">
          <div class="avatar">${this.data.user.initials}</div>
          <div class="user-info label">
            <span class="user-name">${this.data.user.name}</span>
            <span class="user-plan">${this.data.user.plan}</span>
          </div>
        </div>
      </aside>
    `;

    this.renderList('.list-pinned', this.data.pinned, 'M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z');
    this.renderList('.list-recent', this.data.recent, 'M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z');
  }

  renderList(selector, items, iconPath) {
    const list = this.shadow.querySelector(selector);

    items.forEach(item => {
      const entry = document.createElement('li');

      entry.innerHTML =
      /* html */ `
        <a class="link" href="${item.url}">
          <svg class="link-icon" viewBox="0 0 24 24">
            <path d="${iconPath}"></path>
          </svg>
          <span class="label">${item.name}</span>
        </a>
      `;

      list.appendChild(entry);
    });
  }

  addListeners() {
    const menu = this.shadow.querySelector('.menu');
    const backdrop = this.shadow.querySelector('.backdrop');
    const toggle = this.shadow.querySelector('[data-action="toggle"]');

    toggle.addEventListener('click', () => {
      this.setOpen(!menu.classList.contains('is-open'));
    });

    this.shadow.querySelector('[data-action="close"]').addEventListener('click', () => {
      this.setOpen(false);
    });
  }

  setOpen(open) {
    const menu = this.shadow.querySelector('.menu');
    const backdrop = this.shadow.querySelector('.backdrop');
    const toggle = this.shadow.querySelector('[data-action="toggle"]');

    menu.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
}

customElements.define('app-menu', AppMenu);