// function for desktop carousel

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

let currentSlide = 0;

const autoplayInterval = 3000; // Autoplay interval in milliseconds

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  updateSlides();
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(autoplay, autoplayInterval);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlides();
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(autoplay, autoplayInterval);
});

function updateSlides() {
  const translateX = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${translateX}%)`;
}

function autoplay() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlides();
}

let autoplayTimer = setInterval(autoplay, autoplayInterval); // Start autoplay

// function for hamburger display

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// funtion for jewelry carousel

const jewelrySlides = document.querySelectorAll('.jewelry');
const jewelryPrev = document.querySelector('.jewelry-prev');
const jewelryNext = document.querySelector('.jewelry-next');

let currentJewelrySlides = 0;

jewelryPrev.addEventListener('click', () => {
    currentJewelrySlides--;
    if (currentJewelrySlides < 0) currentJewelrySlides = jewelrySlides.length - 1;
    updateJewelrySlides();
});
  
jewelryNext.addEventListener('click', () => {
    currentJewelrySlides++;
    if (currentJewelrySlides >= jewelrySlides.length) currentJewelrySlides = 0;
    updateJewelrySlides();
});

function updateJewelrySlides() {
    const translateX = -currentJewelrySlides * 100;
    const carouselWrapper = document.querySelector('.carousel-wrapper-jewelry');
    if (carouselWrapper) {
      carouselWrapper.style.transform = `translateX(${translateX}%)`;
    }
} 