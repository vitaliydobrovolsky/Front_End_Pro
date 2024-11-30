
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let prev = document.getElementById("prev1");
  let next = document.getElementById("next1")
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (n === 1) {
    prev.style.display = 'none';
  } else {
    prev.style.display = 'block';
  }
  if (n === 3) {
    next.style.display = 'none';
  } else {
    next.style.display = 'block';
  }
    
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}







