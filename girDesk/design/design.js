//////////////////////////////////////////////
// function for colorate the div from color input
function setColor() {
    // divColor.style.background = TwoColor.value;
    svgElementFir.style.fill = TwoColor.value;
    svgElementSec.style.fill = TwoColor.value;
    svgElementThree.style.fill = TwoColor.value;
    svgElementFour.style.fill = TwoColor.value;
    svgElementFive.style.fill = TwoColor.value;
    svgElementSix.style.fill = TwoColor.value;
    svgElementSeven.style.fill = TwoColor.value;
    svgElementEight.style.fill = TwoColor.value;
    console.log('color done')
}

// select the color of the input   
var TwoColor = document.querySelector(".singleColor");

// var divColor = document.getElementById("gradientTwo");
// chnage the color
var svgElementFir = document.getElementById("changeMeFir");
var svgElementSec = document.getElementById("changeMeSec");
var svgElementThree = document.getElementById("changeMeThree");
var svgElementFour = document.getElementById("changeMeFour");
var svgElementFive = document.getElementById("changeMeFive");
var svgElementSix = document.getElementById("changeMeSix");
var svgElementSeven = document.getElementById("changeMeSeven");
var svgElementEight = document.getElementById("changeMeEight");

TwoColor.addEventListener("input", setColor);
