class Form extends HTMLElement {
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
      title: 'Agenda tu cita',
      subtitle: 'Rellena el formulario y nos pondremos en contacto contigo.',
    };
  }

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
        }

        section {
          display: grid;
          gap: 1.5rem;
          margin: 0 auto;
          max-width: 640px;
          padding: 5rem;
          background-color: hsla(0, 0%, 95%, 1.00);
          box-shadow: 0 4px 10px hsla(208, 100%, 17%, 0.42);
          margin-top: 6rem;
          margin-bottom: 6rem;
        }

        h2 {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          line-height: 1;
          text-align: center;
        }

        p {
          font-size: 1rem;
          text-align: center;
        }

        .form-fields {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
        }

        .form-field {
          display: grid;
          font-size: 0.9rem;
          font-weight: 600;
          gap: 0.5rem;
        }

        .form-input {
          border: 0.1rem solid hsl(210, 14%, 80%);
          border-radius: 0.4rem;
          font-size: 1rem;
          padding: 1rem;
        }

        .form-input:focus {
          border-color: hsl(213, 76%, 55%);
          outline: none;
        }

        .form-wide {
          grid-column: 1 / -1;
        }

        .form-button {
          background: hsl(213, 76%, 55%);
          border: none;
          border-radius: 0.4rem;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          font-size: 1rem;
          font-weight: 700;
          padding: 1rem;
          transition: background 0.3s ease;
        }

        .form-button:hover {
          background: hsl(213, 76%, 45%);
        }
      </style>

      <section>
        <h2>${this.data.title}</h2>
        <p>${this.data.subtitle}</p>

        <form class="form-fields">
          <label class="form-field">
            Nombre
            <input class="form-input" type="text" name="name" required>
          </label>

          <label class="form-field">
            Apellido
            <input class="form-input" type="text" name="surname">
          </label>

          <label class="form-field form-wide">
            Email
            <input class="form-input" type="email" name="email" required>
          </label>

          <button class="form-button form-wide" type="submit">Enviar</button>
        </form>
      </section>
    `;
  }

  addListeners() {
    const form = this.shadow.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const values = Object.fromEntries(new FormData(form));

      console.log(values);
      form.reset();
    });
  }
}

customElements.define('form-component', Form);