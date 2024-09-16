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


// function for the products carousel
const fashionSlides = document.querySelectorAll('.fashion');
const electronicSlides = document.querySelectorAll('.electronic');
const jewelrySlides = document.querySelectorAll('.jewelry');

const fashionPrev = document.querySelector('.fashion-prev');
const fashionNext = document.querySelector('.fashion-next');
const electronicPrev = document.querySelector('.electronic-prev');
const electronicNext = document.querySelector('.electronic-next');
const jewelryPrev = document.querySelector('.jewelry-prev');
const jewelryNext = document.querySelector('.jewelry-next');

let currentFashionSlides = 0;
let currentElectronicSlides = 0;
let currentJewelrySlides = 0;


fashionPrev.addEventListener('click', () => {
  currentFashionSlides--;
  if (currentFashionSlides < 0) currentFashionSlides = fashionSlides.length - 1;
  updateFashionSlides();
});

fashionNext.addEventListener('click', () => {
  currentFashionSlides++;
  if (currentFashionSlides >= fashionSlides.length) currentFashionSlides = 0;
  updateFashionSlides();
});

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
function updateFashionSlides() {
  const translateX = -currentFashionSlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper-fashion');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}

function updateElectronicSlides() {
  const translateX = -currentElectronicSlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper-electronic');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}

function updateJewelrySlides() {
  const translateX = -currentJewelrySlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper-jewelry');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}