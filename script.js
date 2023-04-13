function myBgGenerator() {
    const firstColor = document.getElementById('color1');
    const secondColor = document.getElementById('color2');
    const gradientGenerate = document.getElementsByTagName('h3')[0];
    const body = document.getElementById('gradient');
    const randomButton = document.querySelector('.random');
    const firstRandomBtn = document.querySelector('.firstRandomBtn');
    const secondRandomBtn = document.querySelector('.secondRandomBtn');
    const gradientDirection = document.getElementsByName('toDirection')[0];
    const randomDirection = document.querySelector('.randomDirection');

    function changeBackground() {
        if (gradientDirection.value === 'radial') {
            body.style.background = `radial-gradient(${firstColor.value}, 
            ${secondColor.value})`;
            gradientGenerate.textContent = `${body.style.background};`;
        } else {
            body.style.background = `linear-gradient(${gradientDirection.value},
            ${firstColor.value}, ${secondColor.value})`;
            gradientGenerate.textContent = `${body.style.background};`;
        }
    } 

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
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

    function setRandomDirection() {
        const randomNum = Math.floor(Math.random() * gradientDirection.options.length);
        gradientDirection.value = gradientDirection.options[randomNum].value;
        changeBackground();
    }

    function loadFunctions() {
        getRandomColor();
        setRandomGradient();
        setOnlyFirstRandomGradient();
        setOnlySecondRandomGradient();
        changeBackground();
        setRandomDirection();
    }

    window.addEventListener('load',loadFunctions);

    firstColor.addEventListener('input', changeBackground);
    secondColor.addEventListener('input', changeBackground);
    randomButton.addEventListener('click', setRandomGradient);
    firstRandomBtn.addEventListener('click', setOnlyFirstRandomGradient);
    secondRandomBtn.addEventListener('click', setOnlySecondRandomGradient);
    gradientDirection.addEventListener('click', changeBackground);
    randomDirection.addEventListener('click', setRandomDirection);
}

myBgGenerator();