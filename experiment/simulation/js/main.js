
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
    
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.PNG"; }, 800);   
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-110px,-45px)scale(1.5)rotateY(120deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja1img").style.display="inline"}, 400);
         // add eventlistener for click to window:
   window.addEventListener('click', (event) => {
    // event.target is the element having been clicked
    // was a button .obj clicked?
    if (event.target.classList.contains('obj')) {
        // add class "clicked" to the button:
        event.target.classList.add('clicked');
        // are all buttons clicked now?
        if (!document.querySelector('.obj:not(.clicked)')) {
            // make next button visible:
            document.getElementById("n").style.display = "inline";
            swal("Please click on NEXT Button to move at position B");
        }
    }
});
}
}

function pole()
{
   
    
    if($('#n').css('display') === 'none')
   {   
        
       setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/b2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-105px,-60px)scale(2)rotateY(110deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja2img").style.display="inline"}, 400);
         // add eventlistener for click to window:
   window.addEventListener('click', (event) => {
    // event.target is the element having been clicked
    // was a button .obj clicked?
    if (event.target.classList.contains('obj')) {
        // add class "clicked" to the button:
        event.target.classList.add('clicked');
        // are all buttons clicked now?
        if (!document.querySelector('.obj:not(.clicked)')) {
            // make next button visible:
            document.getElementById("n").style.display = "inline";
            swal("Please click on NEXT Button to move at position B");
        }
    }
});
}
}

function house()
{
     
    if($('#n').css('display') === 'none')
    {
        
        setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-85px,-80px)scale(3)rotateY(89deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja3img").style.display="inline"}, 400);
       // add eventlistener for click to window:
   window.addEventListener('click', (event) => {
    // event.target is the element having been clicked
    // was a button .obj clicked?
    if (event.target.classList.contains('obj')) {
        // add class "clicked" to the button:
        event.target.classList.add('clicked');
        // are all buttons clicked now?
        if (!document.querySelector('.obj:not(.clicked)')) {
            // make next button visible:
            document.getElementById("n").style.display = "inline";
            swal("Please click on NEXT Button to move at position B");
        }
    }
});
    }
   
}

function wind()
{
   
    if($('#n').css('display') === 'none'){

       
        setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-65px)scale(2)rotateY(-290deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja4img").style.display="inline"}, 400);
       // add eventlistener for click to window:
   window.addEventListener('click', (event) => {
    // event.target is the element having been clicked
    // was a button .obj clicked?
    if (event.target.classList.contains('obj')) {
        // add class "clicked" to the button:
        event.target.classList.add('clicked');
        // are all buttons clicked now?
        if (!document.querySelector('.obj:not(.clicked)')) {
            // make next button visible:
            document.getElementById("n").style.display = "inline";
            swal("Please click on NEXT Button to move at position B");
        }
    }
});
    }
}
function tree()
{   
    
    if($('#n').css('display') === 'none')

    {      
           setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-55px,-55px)scale(1.5)rotateY(-320deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobja5img").style.display="inline"}, 400);
    // add eventlistener for click to window:
    window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj:not(.clicked)')) {
                // make next button visible:
                document.getElementById("n").style.display = "inline";
                swal("Please click on NEXT Button to move at position B");
            }
        }
    });
}
  }
  
    

function next()
{

    document.getElementById("sheet").style.display="none";
    document.getElementById("tripodimg").style.display="none";
    document.getElementById("sheet2").style.display="inline";
    document.getElementById("tripodimg2").style.display="inline";
    document.getElementById("flag").style.display="none";
    document.getElementById("pole").style.display="none";
    document.getElementById("house").style.display="none";
    document.getElementById("wind").style.display="none";
    document.getElementById("tree").style.display="none";
    document.getElementById("flag2").style.display="inline";
    document.getElementById("pole2").style.display="inline";
    document.getElementById("house2").style.display="inline";
    document.getElementById("wind2").style.display="inline";
    document.getElementById("tree2").style.display="inline";
}
 

function flag2()
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.PNG"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg2").style.transform="translate(-75px,-35px)scale(1.2)rotateY(170deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg2").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb1img2").style.display="inline"}, 400);
    // add eventlistener for click to window:
    window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj2')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj2:not(.clicked)')) {
                // make next button visible:
                document.getElementById("result").style.display = "inline";
                swal("Please click on RESULT Button to observe graph");
            }
        }
    });
   /* document.getElementById("drawobjimg").style.transform="translate(-75px,-35px)scale(1.2)rotateY(170deg)";
    document.getElementById("lineobjb1img").style.display="inline";*/
}
  
  
    


function pole2()
{
        setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/b2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg2").style.transform="translate(-75px,-45px)scale(1.5)rotateY(160deg)"; }, 400);
        setTimeout(function(){  document.getElementById("drawobjimg2").style.transform="translate(0px,0px)"; }, 800);
        setInterval(() => {document.getElementById("lineobjb2img2").style.display="inline"}, 400);
         // add eventlistener for click to window:
    window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj2')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj2:not(.clicked)')) {
                // make next button visible:
                document.getElementById("result").style.display = "inline";
                swal("Please click on RESULT Button to observe graph");
            }
        }
    });
        /*document.getElementById("drawobjimg").style.transform="translate(-75px,-45px)scale(1.5)rotateY(160deg)";
        document.getElementById("lineobjb2img").style.display="inline";*/
}

function house2()
{
   
        setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg2").style.transform="translate(-65px,-60px)scale(2)rotateY(120deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg2").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb3img2").style.display="inline"}, 400);
     // add eventlistener for click to window:
     window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj2')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj2:not(.clicked)')) {
                // make next button visible:
                document.getElementById("result").style.display = "inline";
                swal("Please click on RESULT Button to observe graph");
            }
        }
    });
       /* document.getElementById("drawobjimg").style.transform="translate(-65px,-60px)scale(2)rotateY(120deg)";
        document.getElementById("lineobjb3img").style.display="inline";*/
     
}

function wind2()
{

        setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg2").style.transform="translate(-55px,-60px)scale(2)rotateY(110deg)"; }, 400);
        setTimeout(function(){  document.getElementById("drawobjimg2").style.transform="translate(0px,0px)"; }, 800);
        setInterval(() => {document.getElementById("lineobjb4img2").style.display="inline"}, 400);
     // add eventlistener for click to window:
     window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj2')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj2:not(.clicked)')) {
                // make next button visible:
                document.getElementById("result").style.display = "inline";
                swal("Please click on RESULT Button to observe graph");
            }
        }
    });
        /*document.getElementById("drawobjimg").style.transform="translate(-55px,-60px)scale(2)rotateY(110deg)";
        document.getElementById("lineobjb4img").style.display="inline";*/

      
}
function tree2()
{   
    
  
        setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.PNG"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg2").style.transform="translate(-50px,-70px)scale(2.5)rotateY(-265deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg2").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobjb5img2").style.display="inline"}, 400);
     // add eventlistener for click to window:
     window.addEventListener('click', (event) => {
        // event.target is the element having been clicked
        // was a button .obj clicked?
        if (event.target.classList.contains('obj2')) {
            // add class "clicked" to the button:
            event.target.classList.add('clicked');
            // are all buttons clicked now?
            if (!document.querySelector('.obj2:not(.clicked)')) {
                // make next button visible:
                document.getElementById("result").style.display = "inline";
                swal("Please click on RESULT Button to observe graph");
            }
        }
    });
        /*document.getElementById("drawobjimg").style.transform="translate(-50px,-55px)scale(1.5)rotateY(-250deg)";
        document.getElementById("lineobjb5img").style.display="inline";*/
        
    
    
       
}

function fl_br_based()
  {   
  
      if(document.getElementById("browser_based").style.display === "none" && document.getElementById("flash_based").style.display === "none")
      {   document.getElementById("browser_based").style.display="inline";
          document.getElementById("flash_based").style.display="inline";
          
      }
      else
      {
          document.getElementById("browser_based").style.display="none";
          document.getElementById("flash_based").style.display="none";
  
      }
  
  }
