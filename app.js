let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalslides =slides.length;

document.
 getElementById('carousel_button--next')
  .addEventListener("click", function() {
      moveToNextSlide();
  });
document.
 getElementById('carousel_button--next')
  .addEventListener("click", function() {
      moveToPrevSlide();
  });

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList .remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    
    slides[slidePosition].classList.add('carousel_item--visible'); 
}
    
 function moveToNextSlide() {
    if (slidePosition === totalslides - 1) {
        slidePosition=0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition= totalslides - 1;
    } else {
        slidePosition--;
    }
     
    updateSlidePosition();
}

