var firstColor = document.getElementById('color1');
var secondColor = document.getElementById('color2');
var gradientGenerate = document.getElementsByTagName('h3')[0];
var body = document.getElementById('gradient');
var randomButton = document.querySelector(".random");

function changeBackground() {
    body.style.background = 
    "linear-gradient(to right, "
    + firstColor.value 
    + "," 
    + secondColor.value 
    + ")";
    gradientGenerate.textContent = body.style.background +";";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    firstColor.value = getRandomColor();
    secondColor.value = getRandomColor();
    changeBackground();
}

firstColor.addEventListener("input", changeBackground);

secondColor.addEventListener("input", changeBackground);

randomButton.addEventListener("click", setRandomGradient);
