class UserArea extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadData()
    this.render();

    document.addEventListener('toggleMenu', () => {
      this.shadow.querySelector('.user-area').classList.toggle('active')
    })
  }

  loadData() {
    this.data = {
      initials: 'JO',
      name: 'Jhordy Orozco',
      plan: 'Admin',
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

        .user-area {
          align-items: center;
          border-top: 1px solid hsl(39, 21%, 58%);
          display: flex;
          gap: 0.6rem;
          justify-content: center;
          overflow: hidden;
          padding: 0.7rem 0.3rem;
        }

        .user-area.active {
          justify-content: flex-start;
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
          flex-shrink: 0;
          height: 2rem;
          justify-items: center;
          width: 2rem;
        }

        .user-info {
          overflow: hidden;
        }

        .user-name {
          display: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .active .user-name {
          display: block;
        }

        .user-plan {
          color: hsl(34, 17%, 39%);
          display: none;
          font-size: 0.75rem;
        }

        .active .user-plan {
          display: block;
        }
      </style>

      <div class="user-area">
        <div class="avatar">${this.data.initials}</div>
        <div class="user-info label">
          <span class="user-name">${this.data.name}</span>
          <span class="user-plan">${this.data.plan}</span>
        </div>
      </div>
    `
  }
}

customElements.define('user-area-component', UserArea);
