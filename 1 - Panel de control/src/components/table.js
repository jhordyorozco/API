class Table extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
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
            width: 100%;
            border: 1px solid hsl(0, 0%, 85%);
        }

        .table {
            display: grid;
            width: 100%;
        }

        .table-header {
            display: grid;
            grid-template-columns: 2rem minmax(0, 1fr) auto;
            padding-bottom: 0;
            border-bottom: 2px solid hsl(35, 90%, 55%);
        }

        .table-filter {
            align-items: center;
            background-color: hsl(35, 90%, 55%);
            display: flex;
            height: 2rem;
            justify-content: center;
            width: 2rem;
            cursor: pointer;
        }

        .table-filter svg {
            fill: hsl(272, 40%, 35%);
            height: 1.5rem;
            width: 1.5rem;
        }

        .table-pagination {
            align-items: center;
            background-color: hsl(35, 90%, 55%);
            color: hsl(0, 0%, 100%);
            display: flex;
            gap: 0.2rem;
            justify-self: end;
            padding: 0 0.25rem;
        }

        .table-pagination button {
            align-items: center;
            background-color: transparent;
            border: none;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
            display: flex;
            font-size: 1.2rem;
            height: 2rem;
            justify-content: center;
            padding: 0.90rem;
        }

        .table-pagination button:hover {
            background-color: hsla(0, 0%, 100%, 0.15);
        }

        .table-grid span:last-child {
            color: rgba(130, 130, 130, 1);
        }

        .table-grid {
            border: 2px solid hsl(35, 90%, 55%);
            display: grid;
            background-color: white;
            margin: 0.5rem;
        }

        .table-cell {
            color: hsl(0, 0%, 20%);
            display: flex;
            gap: 0.4rem;
            padding: 0.4rem 0.8rem;
        }

        .table-grid span:first-child {
            font-weight: 800;
        }
    </style>

    <section class="table">
        <header class="table-header">
            <div class="table-filter">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                </svg>
            </div>

            <div class="table-pagination">
                <button type="button" aria-label="Anterior">&lt;</button>
                <span>1 / 1</span>
                <button type="button" aria-label="Siguiente">&gt;</button>
            </div>
        </header>

        <div class="table-grid">

            <div class="table-cell">
                <span>Nombre:</span>
                <span>Jhordy Orozco</span>
            </div>

            <div class="table-cell">
                <span>Email:</span>
                <span>danian1307@gmail.com</span>
            </div>

            <div class="table-cell">
                <span>Fecha de creación:</span>
                <span>2026-09-22</span>
            </div>

            <div class="table-cell">
                <span>Fecha de actualización:</span>
                <span>2026-09-22</span>
            </div>

        </div>

    </section>
        `
    }
}

customElements.define('table-component', Table)