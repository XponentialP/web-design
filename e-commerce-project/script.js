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

// function toggleMenu() {
//   const menu = document.querySelector('.menu-links');
//   const icon = document.querySelector('.hamburger-icon');
  
//   if (menu.classList.contains("open")) {
//     menu.classList.remove("open");
//     setTimeout(() => {
//       menu.style.display = "none";
//     }, 1400); // Matches the transition duration
//   } else {
//     menu.style.display = "block";
//     setTimeout(() => {
//       menu.classList.add("open");
//     }, 10); // Small delay to trigger the transition
//   }

//   icon.classList.toggle("open");
// }


// function for the products carousel

// function setupCarousel(carouselClass, prevBtnClass, nextBtnClass) {
//   const carousel = document.querySelectorAll(carouselClass);
//   const slide = carousel.children;
//   const prevSlide = document.querySelectorAll(prevBtnClass);
//   const nextSlide = document.querySelectorAll(nextBtnClass);

//   let currentIndex = 0;

//   prevSlide.addEventListener('click', () => {
//     currentIndex--;
//     if(currentIndex < 0) currentIndex = slide.length - 1;
//     updateCarousel();
//   });

//   nextSlide.addEventListener('click', () => {
//     currentIndex++;
//     if(currentIndex >= slide.length) currentIndex = 0;
//     updateCarousel();
//   });

//   function updateCarousel() {
//     const translateX = -currentIndex * 100;
//     carousel.style.transform = `translateX(${translateX}%)`;
//   }
// }

// // intialize the carousels 

// setupCarousel('.fashion', '.fashion-prev', '.fashion-next');
// setupCarousel('.electronic ', '.electronic-prev', '.electronic-next');
// setupCarousel('.jewelry', '.jewelry-prev', '.jewelry-next');

// function setupCarousel(carouselClass, prevBtnClass, nextBtnClass) {
//   const carousels = document.querySelectorAll(carouselClass);
//   const prevSlides = document.querySelectorAll(prevBtnClass);
//   const nextSlides = document.querySelectorAll(nextBtnClass);

//   carousels.forEach((carousel, index) => {
//     const slides = carousel.querySelectorAll('.products-container');
//     let currentIndex = 0;

//     prevSlides[index].addEventListener('click', () => {
//       currentIndex--;
//       if (currentIndex < 0) currentIndex = slides.length - 1;
//       updateCarousel();
//     });

//     nextSlides[index].addEventListener('click', () => {
//       currentIndex++;
//       if (currentIndex >= slides.length) currentIndex = 0;
//       updateCarousel();
//     });

//     function updateCarousel() {
//       const translateX = -currentIndex * 100;
//       carousel.style.transform = `translateX(${translateX}%)`;
//     }
//   });
// }

// // Initialize the carousels
// setupCarousel('.fashion', '.fashion-prev', '.fashion-next');
// setupCarousel('.electronic', '.electronic-prev', '.electronic-next');
// setupCarousel('.jewelry', '.jewelry-prev', '.jewelry-next');



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
  // console.log(updateFashionSlides);
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

