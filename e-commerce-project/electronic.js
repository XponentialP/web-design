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

// function for electronic carousel

const electronicSlides = document.querySelectorAll('.electronic');
const electronicPrev = document.querySelector('.electronic-prev');
const electronicNext = document.querySelector('.electronic-next');

let currentElectronicSlides = 0;

electronicPrev.addEventListener('click', () => {
    currentElectronicSlides--;
    if (currentElectronicSlides < 0) currentElectronicSlides = electronicSlides.length - 1;
    updateElectronicSlides();
});
  
electronicNext.addEventListener('click', () => {
    currentElectronicSlides++;
    if (currentElectronicSlides >= electronicSlides.length) currentElectronicSlides = 0;
    updateElectronicSlides();
});

function updateElectronicSlides() {
    const translateX = -currentElectronicSlides * 100;
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.style.transform = `translateX(${translateX}%)`;
    }
}