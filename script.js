var firstColor = document.getElementById('color1');
var secondColor = document.getElementById('color2');
var gradientGenerate = document.getElementsByTagName('h3')[0];
var body = document.getElementById('gradient');

function changeBackground() {
    body.style.background = 
    "linear-gradient(to right, "
    + firstColor.value 
    + "," 
    + secondColor.value 
    + ")";

    gradientGenerate.textContent = body.style.background +";";
}

firstColor.addEventListener("input", changeBackground);

secondColor.addEventListener("input", changeBackground);

