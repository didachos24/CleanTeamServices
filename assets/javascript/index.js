// function navbarFunction () {
//     var x = document.getElementById("topnavbar");
//     if( x.className === "top-navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "top-navbar"
//     }
// }

function openNav() {
    document.getElementById("topnavbar").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("topnavbar").style.width = "0%";
  }