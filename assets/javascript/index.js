function navbarFunction () {
    var x = document.getElementById("topnavbar");
    if( x.className === "top-navbar") {
        x.className += " responsive";
    } else {
        x.className = "top-navbar"
    }
}