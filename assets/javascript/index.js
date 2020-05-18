// Responsive Navbar
function openNav() {
    document.getElementById("topnavbar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("topnavbar").style.width = "0%";
  }


  // Slideshow 
  var slideIndex = 0;
  slideshow();

  function slideshow() {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    console.log(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(slideshow, 4000);
  }
