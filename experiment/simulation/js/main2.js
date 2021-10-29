var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 // Provide array containing images:
 const imgs = Array.from(document.querySelectorAll('.obj'));
 // Add event listener for document:
 document.addEventListener('click', event => {
     // Has one of the images been clicked?
     if (event.target.classList.contains('obj')) {
         // Add class indicating that is has been clicked:
         event.target.classList.add('is-clicked');
         // Check if all images have been clicked:
         if (!imgs.find(item => !item.classList.contains('is-clicked'))) {
             // Make button visible:
             document.querySelector('#n').style.display = 'inline';
         }
     }
 });