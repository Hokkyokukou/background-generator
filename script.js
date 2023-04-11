function myBgGenerator() {
    let firstColor = document.getElementById('color1');
    let secondColor = document.getElementById('color2');
    let gradientGenerate = document.getElementsByTagName('h3')[0];
    let body = document.getElementById('gradient');
    let randomButton = document.querySelector('.random');
    let firstRandomBtn = document.querySelector('.firstRandomBtn');
    let secondRandomBtn = document.querySelector('.secondRandomBtn');
    let linearDirection = document.getElementsByName('toDirection')[0];
    let randomDirection = document.querySelector('.randomDirection');

    function changeBackground() {
        body.style.background = 
        'linear-gradient( to right, '
        + firstColor.value 
        + ',' 
        + secondColor.value 
        + ')';
        gradientGenerate.textContent = body.style.background +';';
    } 

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setRandomGradient() {
        firstColor.value = getRandomColor();
        secondColor.value = getRandomColor();
        changeBackground();
    }

    function setOnlyFirstRandomGradient() {
        firstColor.value = getRandomColor();
        changeBackground();
    }

    function setOnlySecondRandomGradient() {
        secondColor.value = getRandomColor();
        changeBackground();
    }

    const actions = {
        "to right": "to right",
        "to left": "to left",
        "to top": "to top",
        "to bottom": "to bottom",
        "to right bottom": "to right bottom",
        "to left bottom": "to left bottom",
        "to right top": "to right top",
        "to left top": "to left top"
    };

    function setDirection() {
        const direction = actions[linearDirection.value];
        if (direction) {
            body.style.background = 
            'linear-gradient('
            + direction
            + ', '
            + firstColor.value 
            + ',' 
            + secondColor.value 
            + ')';
        gradientGenerate.textContent = body.style.background +';';
        } else {
            console.log("Invalid Input");
        }
    } 

    const directions = ["to top", "to right", "to bottom", "to left","to right bottom","to left bottom","to right top","to left top"];

    function setRandomDirection() {
        let randomNum = Math.floor(Math.random() * directions.length);
        linearDirection.value = actions[directions[randomNum]];
        setDirection();
    }

    window.addEventListener('load', getRandomColor);
    window.addEventListener('load', setRandomGradient);
    window.addEventListener('load', setOnlyFirstRandomGradient);
    window.addEventListener('load', setOnlySecondRandomGradient);
    window.addEventListener('load', setDirection);
    window.addEventListener('load', setRandomDirection);

    firstColor.addEventListener('input', changeBackground);
    secondColor.addEventListener('input', changeBackground);
    randomButton.addEventListener('click', setRandomGradient);
    firstRandomBtn.addEventListener('click', setOnlyFirstRandomGradient);
    secondRandomBtn.addEventListener('click', setOnlySecondRandomGradient);
    linearDirection.addEventListener('click', setDirection);
    randomDirection.addEventListener('click', setRandomDirection);
}

myBgGenerator();