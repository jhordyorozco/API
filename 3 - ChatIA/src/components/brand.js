class Brand extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.loadData()
    this.render();
  }

  loadData() {
    this.data = {
      brand: 'Sendo Beta',
    }
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
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

        .label{
          display: none;
        }

        .brand.active .label{
          display: block;
        }
      </style>

      <button class="brand" type="button" aria-label="Abrir menú" aria-expanded="false" data-action="toggle">
        <svg class="brand-icon" viewBox="0 0 24 24">
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z"></path>
        </svg>
        <span class="label">${this.data.brand}</span>
      </button>
    `

    this.shadow.querySelector('.brand').addEventListener('click', () => {

      this.shadow.querySelector('.brand').classList.toggle('active')

      document.dispatchEvent(new CustomEvent('toggleMenu', {
        detail: {
          status: this.shadow.querySelector('.brand').classList.contains('active') ? true : false
        }
      }));
    });
  }
}

customElements.define('brand-component', Brand);
