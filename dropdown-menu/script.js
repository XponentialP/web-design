const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const productsContainers = document.querySelectorAll('.products-container');

let currentIndex = 0;
const totalSlides = productsContainers.length;

function showSlide(index) {
    const slideWidth = productsContainers[0].offsetWidth;
    carouselWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Auto-slide functionality
let autoSlide = setInterval(() => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}, 3000);

// Pause auto-slide on mouse hover
document.querySelector('.product-carousel').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

// Resume auto-slide on mouse leave
document.querySelector('.product-carousel').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 3000);
});
