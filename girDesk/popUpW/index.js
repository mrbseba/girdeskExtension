var css = document.querySelector("p");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var auto = document.getElementById("auto");
var stopGrad = document.getElementById("stopGrad");
var copyClick = document.getElementById("copyClick");
var k = 0;


function setGradient() {
    body.style.background = "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")";
    css.textContent = body.style.background;
}

function randomColor() {
        var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        return newColor;      
}

function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);

auto.addEventListener("click", function() {
    if(k == 0){
        interval = setInterval(randomGradient, 800);
        k++;
        console.log("auto start");
    }else{
        console.log('button was presed')
    }     
});

stopGrad.addEventListener("click", function() {
    // interval = setInterval(randomGradient, 2000);
    clearInterval(interval);
    k = 0;
    console.log("stop done");
});

// copyClick.addEventListener("click", function (){
//     var copyColor = document.getElementById("rgbColor");

//     copyColor.select();
//     navigator.clipboard.writeText(copyColor.value);
// });


//copy the gradiend in clipboard
// function copyTextBoard() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");

//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /* For mobile devices */

//      /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText.value);
//   }
