//Carousell

const buttons = document.querySelectorAll("[data-carrousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const offset = button.dataset.carrouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carrousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.lenght) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active 
    })
});

//NavBar for mobile
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".dropdownMenu");
    const collapseMenu = document.querySelector(".navbarCollapse");

    toggleButton.addEventListener("click", () => {
        collapseMenu.classList.toggle("show");
    });
});
