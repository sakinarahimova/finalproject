const BtnTranslate = document.querySelector('.btn-translate')
const ListTranslate = document.querySelector(".ul-translate")
BtnTranslate.addEventListener("click" ,() => {
    console.log("h");    
    ListTranslate.classList.toggle("ul-translate-active")
})
function initializeCarousel(trackSelector, leftButtonSelector, rightButtonSelector) {
  const track = document.querySelector(trackSelector);
  const leftButton = document.querySelector(leftButtonSelector);
  const rightButton = document.querySelector(rightButtonSelector);
  const images = track.children;
  

  let indexes = [];
  for (let i = 0; i < images.length; i++) {
      indexes.push(i + 1);
  }

  function updateIndexes() {
      indexes = [];
      for (let i = 0; i < images.length; i++) {
          indexes.push(i + 1);
      }
  }

  function updateCarousel() {
      for (let i = 0; i < images.length; i++) {
          const image = images[i];
          const index = indexes[i];
          if (index === 3) {
              image.style.transform = "scale(1.3)";
              image.style.opacity = "1";
          } else {
              image.style.transform = "scale(1)";
              image.style.opacity = "0.6";
          }
      }
  }

  function moveLeft() {
      const firstElement = track.firstElementChild;
      track.removeChild(firstElement);
      track.append(firstElement);

      track.style.transform = "translateX(13px)";

      updateIndexes();
      updateCarousel();

      setTimeout(() => {
          track.style.transition = "transform 1s ease-in-out";
          track.style.transform = "translateX(-13px)";
      }, 10);
  }

  function moveRight() {
      const lastElement = track.lastElementChild;
      track.removeChild(lastElement);
      track.prepend(lastElement);
      track.style.transform = "translateX(-15px)";
      //   track.style.transition = "none";

      updateIndexes();
      updateCarousel();

      setTimeout(() => {
          track.style.transition = "transform 1s ease-in-out";
          track.style.transform = "translateX(15px)";
      }, 10);
  }

  leftButton.addEventListener("click", moveLeft);
  rightButton.addEventListener("click", moveRight);

  updateIndexes();
  updateCarousel();
}

initializeCarousel('.carousel1-track1', '.arrow.left1', '.arrow.right1');
initializeCarousel('.carousel2-track', '.arrow.left2', '.arrow.right2');

