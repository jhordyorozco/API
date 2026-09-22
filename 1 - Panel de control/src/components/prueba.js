class Form extends HTMLElement {

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = /* html */ `
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                }

                :host {
                    display: block;
                    width: 100%;
                }

                .form-section {
                    background-color: hsl(210, 25%, 97%);
                    display: grid;
                    gap: 1rem;
                    grid-template-columns: minmax(0, 1fr) auto;
                    padding: 1rem;
                    width: 100%;
                }

                .form-title {
                    align-items: center;
                    background-color: hsl(35, 90%, 55%);
                    display: flex;
                    height: 2rem;
                    justify-content: center;
                    width: 6rem;
                }

                .form-title h2 {
                    color: hsl(0, 0%, 100%);
                    font-size: 1rem;
                    font-weight: 700;
                }

                .form-icon {
                    align-items: center;
                    display: flex;
                    gap: 0.5rem;
                    justify-content: flex-end;
                }

                .form-erase,
                .form-save {
                    align-items: center;
                    display: flex;
                    height: 2rem;
                    justify-content: center;
                    width: 2rem;
                }

                .form-erase svg,
                .form-save svg {
                    fill: hsl(35, 90%, 55%);
                    height: 1.5rem;
                    width: 1.5rem;
                }

                .form {
                    background-color: hsl(210, 25%, 97%);
                    display: grid;
                    padding: 0 1rem 1rem;
                    width: 100%;
                }

                .form-inputs {
                    display: grid;
                    gap: 0.75rem;
                    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
                }

                .name-inputs,
                .email-inputs {
                    background-color: hsl(0, 0%, 100%);
                    border: 1px solid hsl(0, 0%, 75%);
                    height: 2rem;
                    padding: 0.5rem;
                    width: 100%;
                }

                .name-inputs::before,
                .email-inputs::before {
                    color: hsl(0, 0%, 10%);
                    font-weight: 700;
                }
            </style>

            <section class="form-section">

                <div class="form-title">
                    <h2>General</h2>
                </div>

                <div class="form-icon">

                    <div class="form-erase">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" />
                        </svg>
                    </div>

                    <div class="form-save">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                        </svg>
                    </div>

                </div>

            </section>

            <div class="form">

                <form class="form-inputs">
                    <label>Nombre
                    <input type="text" name="name" class="name-inputs">
                    </label>

                    <label>Email
                    <input type="email" name="email" class="email-inputs">
                    </label>

                </form>

            </div>
        `
    }
}

customElements.define('form-component', Form)