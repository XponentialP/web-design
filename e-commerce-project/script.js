const slides = document.querySelectorAll('.slide');
const fashionSlides = document.querySelectorAll('.fashion');
const electronicSlides = document.querySelectorAll('.electronic');
const jewelrySlides = document.querySelectorAll('.jewelry');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
const fashionPrev = document.querySelector('.fashion-prev');
const fashionNext = document.querySelector('.fashion-next');
const electronicPrev = document.querySelector('.electronic-prev');
const electronicNext = document.querySelector('.electronic-next');
const jewelryPrev = document.querySelector('.jewelry-prev');
const jewelryNext = document.querySelector('.jewelry-next');
let currentSlide = 0;
let currentFashionSlides = 0;
let currentElectronicSlides = 0;
let currentJewelrySlides = 0;


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

function updateSlides() {
  const translateX = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${translateX}%)`;
}

function updateFashionSlides() {
  console.log(updateFashionSlides);
  const translateX = -currentFashionSlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}

function updateElectronicSlides() {
  const translateX = -currentElectronicSlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}

function updateJewelrySlides() {
  const translateX = -currentJewelrySlides * 100;
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
  }
}

function autoplay() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  updateSlides();
}

let autoplayTimer = setInterval(autoplay, autoplayInterval); // Start autoplay


// const currentSlides = {
//   fashion: 0,
//   elctronics: 0,
//   jewelry: 0,
// };


// // Handle clicks for each carousel
// document.querySelector('.fashion-prev').addEventListener('click', () => handleCarousel('fashion'));
// document.querySelector('.fashion-next').addEventListener('click', () => handleCarousel('fashion'));

// document.querySelector('.electronics-prev').addEventListener('click', () => handleCarousel('electronics'));
// document.querySelector('.electronics-next').addEventListener('click', () => handleCarousel('electronics'));

// document.querySelector('.jewelry-prev').addEventListener('click', () => handleCarousel('jewelry'));
// document.querySelector('.jewelry-next').addEventListener('click', () => handleCarousel('jewelry'));

// // Function to handle carousle logic based on carousel type
// function handleCarousel(type) {
//   let currentSlides;
//   if (type === 'fashion'){
//     carouselSlides = document.querySelectorAll('product-carousel.fashion .products-container');
//   } else if (type === 'electronics'){
//     carouselSlides = document.querySelectorAll('product-carousel.electronics .products-container');
//   } else if (type === 'jewelry'){
//     carouselSlides = document.querySelectorAll('product-carousel.jewelry .products-container');
//   }

//   // update the correct currentSlides

// currentSlides[type]++;
// if (currentSlides[type] >= carouselSlides.length) currentSlides[type] = 0;
// const translateX = -currentSlides[type] * 100;
// carouselSlides[0].parentNode.style.transform = `translateX(${translateX}%)`;
// }

