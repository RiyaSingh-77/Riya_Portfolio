let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Initialize first slide
showSlide(slideIndex);
