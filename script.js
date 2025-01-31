document.addEventListener("DOMContentLoaded", function () {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const carousel = document.querySelector(".carousel-container");

    let index = 0;
    const totalSlides = document.querySelectorAll(".carousel-slide").length;

    next.addEventListener("click", () => {
        if (index < totalSlides - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalSlides - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const slideWidth = document.querySelector(".carousel-slide").clientWidth;
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    }
});
