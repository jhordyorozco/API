class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.data = {};
    this.labels = JSON.parse(this.getAttribute('label') || '{}');
    this.loginTitle = '';
  }

  connectedCallback() {
    this.loadData();
    this.render();
    this.addListeners();
  }

  loadData() {
  this.loginTitle = this.labels.title;

  this.data = {
    email: 'email',
    password: 'password',
  };
}

  render() {
    this.shadow.innerHTML =
    /* html */ `
      <style>
        * { 
          margin: 0; 
          box-sizing: border-box; 
          font-family: 'Lato', sans-serif;
        }

        .wrapper {
          background-color: hsla(40, 94%, 48%, 1.00);
          box-shadow: 3px -3px 24px 0px hsla(41, 34%, 39%, 1.00);
          padding: 5.5rem 7rem;
        }

        h1 {
          color: hsla(0, 0%, 100%, 1.00);
          font-size: 4rem;
          font-weight: 700;
          text-align: center;
        }

        .login {
          display: grid;
          gap: 2rem;
          width: min(100%, 16.5rem);
        }

        .login-button {
          background-color: hsla(0, 0%, 0%, 1.00);
          border: none;
          border-radius: 0.4rem;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          font-size: 0.9rem;
          height: 2rem;
          width: 100%;
        }

        .login-fields {
          display: grid;
          gap: 1rem;
        }

        .login-form {
          display: grid;
          gap: 1.5rem;
        }

        .login-input {
          background-color: hsl(0, 0%, 100%);
          border: 2px inset hsl(0, 0%, 75%);
          height: 2rem;
          width: 100%;
        }

        .login-label {
          color: hsla(0, 0%, 100%, 1.00);
          display: grid;
          font-size: 1.2rem;
          font-weight: 700;
          gap: 0.4rem;
        }

        .login-link {
          color: hsla(0, 0%, 100%, 1.00);
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
        }
      </style>

      <div class="wrapper">

      <section class="login">
        <h1></h1>

        <form class="login-form">
          <div class="login-fields"></div>
          <button class="login-button" type="submit">Enviar</button>
          <a class="login-link" href="#">Olvidé mi contraseña</a>
        </form>
      </section>
      </div>
    `;

    this.shadow.querySelector('h1').textContent = this.loginTitle;

    const loginFields = this.shadow.querySelector('.login-fields');

    Object.entries(this.data).forEach(([key, value]) => {
      const loginLabel = document.createElement('label');
      loginLabel.classList.add('login-label');
      loginFields.appendChild(loginLabel);

      const loginText = document.createElement('span');
      loginLabel.appendChild(loginText);
      loginText.textContent = this.labels[key];

      const loginInput = document.createElement('input');
      loginInput.classList.add('login-input');
      loginLabel.appendChild(loginInput);
      loginInput.name = key;
      loginInput.required = true;
      loginInput.type = value;
    });
  }

  addListeners() {
    this.shadow.querySelector('.login-form').addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(Object.fromEntries(new FormData(event.target)));
    });
  }
}

customElements.define('login-form-component', LoginForm);