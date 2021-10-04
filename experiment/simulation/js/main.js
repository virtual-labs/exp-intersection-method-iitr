
function Reset() 
{
window.location.reload();
}
// SLIDING ANIMATION OF IMAGES
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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// TIMING FUNCTION TO AUTO CHANGE IMAGES
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function set_time()
{
setInterval(image_show,1500);
}

var clear;

function flag()
{

    if($('#n').css('display') === 'none')
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.png"; }, 800);   
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-115px,-35px)scale(1.2)rotateY(150deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja1img").style.display="inline"}, 400);
    /*document.getElementById("drawobjimg").style.transform="translate(-115px,-35px)scale(1.2)rotateY(150deg)";
    document.getElementById("lineobja1img").style.display="inline";*/
}
else
{   setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.png"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-75px,-35px)scale(1.2)rotateY(170deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb1img").style.display="inline"}, 400);
   /* document.getElementById("drawobjimg").style.transform="translate(-75px,-35px)scale(1.2)rotateY(170deg)";
    document.getElementById("lineobjb1img").style.display="inline";*/
}
  
}

function pole()
{
    
    if($('#n').css('display') === 'none')
   {    setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/b2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-100px,-50px)scale(2)rotateY(110deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja2img").style.display="inline"}, 400);
       /*document.getElementById("drawobjimg").style.transform="translate(-100px,-50px)scale(2)rotateY(110deg)";
       document.getElementById("lineobja2img").style.display="inline";*/
}
  else
           
   {   
        setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/b2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-75px,-45px)scale(1.5)rotateY(160deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb2img").style.display="inline"}, 400);
        /*document.getElementById("drawobjimg").style.transform="translate(-75px,-45px)scale(1.5)rotateY(160deg)";
        document.getElementById("lineobjb2img").style.display="inline";*/
   } 
   

}

function house()
{
    if($('#n').css('display') === 'none')
    {
        setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-80px,-65px)scale(2.5)rotateY(85deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja3img").style.display="inline"}, 400);
        /*document.getElementById("drawobjimg").style.transform="translate(-80px,-65px)scale(2.5)rotateY(85deg)";
        document.getElementById("lineobja3img").style.display="inline";*/
    }
    else{
        setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-60px)scale(2)rotateY(120deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb3img").style.display="inline"}, 400);
       /* document.getElementById("drawobjimg").style.transform="translate(-65px,-60px)scale(2)rotateY(120deg)";
        document.getElementById("lineobjb3img").style.display="inline";*/
    }   
}

function wind()
{
    if($('#n').css('display') === 'none'){

        setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-65px)scale(2)rotateY(-290deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja4img").style.display="inline"}, 400);
       /* document.getElementById("drawobjimg").style.transform="translate(-65px,-65px)scale(2)rotateY(-290deg)";
        document.getElementById("lineobja4img").style.display="inline";*/
    }
    else{
        setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-55px,-60px)scale(2)rotateY(110deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb4img").style.display="inline"}, 400);
        /*document.getElementById("drawobjimg").style.transform="translate(-55px,-60px)scale(2)rotateY(110deg)";
        document.getElementById("lineobjb4img").style.display="inline";*/
    }
      
}
function tree()
{   
    if($('#n').css('display') === 'none')
    {   setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-50px,-55px)scale(1.5)rotateY(-320deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja5img").style.display="inline"}, 400);
       /* document.getElementById("drawobjimg").style.transform="translate(-50px,-55px)scale(1.5)rotateY(-320deg)";
        document.getElementById("lineobja5img").style.display="inline";*/
        document.getElementById("n").style.display="inline";
        swal({title: "Good job!",text: "Click  on the NEXT Button to move table at position B",icon: "success",button: "ok",
          });
    }
  else{
        setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-50px,-55px)scale(1.5)rotateY(-250deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb5img").style.display="inline"}, 400);
        /*document.getElementById("drawobjimg").style.transform="translate(-50px,-55px)scale(1.5)rotateY(-250deg)";
        document.getElementById("lineobjb5img").style.display="inline";*/
        document.getElementById("result").style.display="inline";
        swal({title: "Good job!",text: "Click  on the RESULT Button to proceed further",icon: "success",button: "ok",
          });
    }
       
}

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
                    document.querySelector('#n').disabled=false;
                }
            }
        });

function next()
{

    document.getElementById("sheet").style.transform="translate(650px)perspective(800px)scaleZ(2)rotateX(70deg)";
    document.getElementById("tripodimg").style.transform="translate(650px)";
}