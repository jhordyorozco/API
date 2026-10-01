class Table extends HTMLElement {

  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.labels = JSON.parse(this.getAttribute('label') || '{}')
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        name: "Jhordy Orozco",
        email: "danian1307@gmail.com",
        createdAt: "2026-09-22",
        updatedAt: '2026-09-22'
      },
      {
        name: "Carlos Orozco",
        email: "carlosorozco@gmail.com",
        createdAt: "2026-09-22",
        updatedAt: '2026-09-22'
      },
      {
        name: "Jhordy Orozco",
        email: "danian1307@gmail.com",
        createdAt: "2026-09-22",
        updatedAt: '2026-09-22'
      },
      {
        name: "Jhordy Orozco",
        email: "danian1307@gmail.com",
        createdAt: "2026-09-22",
        updatedAt: '2026-09-22'
      },
      {
        name: "Jhordy Orozco",
        email: "danian1307@gmail.com",
        createdAt: "2026-09-22",
        updatedAt: '2026-09-22'
      },
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
            fill: hsla(0, 0%, 100%, 1.00);
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

        .table-cell  {
          border: 2px solid hsl(35, 90%, 55%);
          background-color: white;
          margin: 0.5rem;
        }

        .table-cell {
          color: hsl(0, 0%, 20%);
          padding: 0.4rem 0.8rem;
        }

        .table-cell ul{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          padding: 0;
        }

        .table-cell ul li span {
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

      <div class="table-grid"></div>
       </section>
        `

     const tableGrid = this.shadow.querySelector('.table-grid')
    const data = this.data;
    data.forEach(field => {
      const tableCell = document.createElement('div')
      tableCell.classList.add('table-cell')
      tableGrid.appendChild(tableCell)

      const tableList = document.createElement('ul')
      tableCell.appendChild(tableList)

      Object.entries(field).forEach(([key, value]) => {
        const tableListItem = document.createElement('li')
        tableList.appendChild(tableListItem)
        tableListItem.textContent = value

        const bold = document.createElement('span')
        tableListItem.prepend(bold)
        bold.textContent = this.labels[key] + ': '
      })
    })

    // this.data.forEach(field => {
    //   const tablecell = document.createElement('div')
    //   tablecell.classList.add('table-cell')
    //   tableGrid.appendChild(tablecell)

    //   const tableList = document.createElement('ul')
    //   tablecell.appendChild(tableList)

    //   const labelName = document.createElement('li')
    //   labelName.textContent = `Nombre: ${field.name}`
    //   tableList.append(labelName)

    //   const labelEmail = document.createElement('li')
    //   labelEmail.textContent = `Email: ${field.email}`
    //   tableList.append(labelEmail)

    //   const labelCreatedAt = document.createElement('li')
    //   labelCreatedAt.textContent = `Creado el: ${field.createdAt}`
    //   tableList.append(labelCreatedAt)

    //   const labelUpdatedAt = document.createElement('li')
    //   labelUpdatedAt.textContent = `Actualizado el: ${field.updatedAt}`
    //   tableList.append(labelUpdatedAt)
    // })
  }
}

customElements.define('table-component', Table)