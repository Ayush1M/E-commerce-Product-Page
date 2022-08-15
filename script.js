const slides = document.getElementsByClassName("product-image")

let slidePosition = 0
const totalSlides = slides.length

document.getElementById("next-btn").addEventListener("click", moveToNextSlide)
document.getElementById("previous-btn").addEventListener("click", moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
 slides[slidePosition].classList.add("carousel-item-visible");
}