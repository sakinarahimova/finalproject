// Select elements
const track = document.querySelector(".carousel-track");
const leftButton = document.querySelector(".arrow.left");
const rightButton = document.querySelector(".arrow.right");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0; // Keep track of the current visible image
const itemWidth = items[0].getBoundingClientRect().width;

// Arrange items horizontally
function setItemPosition() {
  items.forEach((item, index) => {
    item.style.left = `${index * 100}%`; // Position items in a row
  });
}

// Move carousel to the correct slide
function moveCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Move to the next slide
function nextSlide() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  moveCarousel(currentIndex);
}

// Move to the previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // Loop back to the last slide
  }
  moveCarousel(currentIndex);
}

// Add event listeners
rightButton.addEventListener("click", nextSlide);
leftButton.addEventListener("click", prevSlide);

// Auto-scroll the carousel every 3 seconds
setInterval(nextSlide, 3000);

// Initialize carousel
setItemPosition();
