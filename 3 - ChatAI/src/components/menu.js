export default () => {
    const app = document.querySelector(".app")
    const brand = document.querySelector(".brand")
    brand.addEventListener("click", () => {
        app.classList.toggle("collapsed")
    })
}