// Responsive Navbar
function openNav() {
    // Show menu changing style
    document.getElementById("topnavbar").style.width = "100%";
  }
  
  function closeNav() {
    // Hide menu
    document.getElementById("topnavbar").style.width = "0%";
  }


  // Slideshow 

  // Slides counter
  var slideIndex = 0;
  slideshow();

  function slideshow() {
    let i;
    // Catch pictures for slideshow
    let slides = document.getElementsByClassName("slideshow");
    // Hide each picture in slideshow
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Start slideshow with slide counter, change picture
    slideIndex++;
    // Restart counter
    if (slideIndex > slides.length) {slideIndex = 1};
    // Change display for picture in turn
    slides[slideIndex-1].style.display = "block";
    // Restart function every 4 seconds
    setTimeout(slideshow, 4000);
  }
