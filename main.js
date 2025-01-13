const myBgGenerator = () => {
    const firstColor = document.getElementById('color1');
    const secondColor = document.getElementById('color2');
    const gradientGenerate = document.querySelector('.gradientGenerate');
    const body = document.getElementById('gradient');
    const randomButton = document.querySelector('.random');
    const firstRandomBtn = document.querySelector('.firstRandomBtn');
    const secondRandomBtn = document.querySelector('.secondRandomBtn');
    const gradientDirection = document.querySelector('.toDirection');
    const randomDirection = document.querySelector('.randomDirection');

    // Function to change the background based on selected colors and direction
    const changeBackground = () => {
        const gradientType =
            gradientDirection.value === 'radial'
                ? 'radial-gradient'
                : 'linear-gradient';
        if (gradientType === 'radial-gradient') {
            body.style.background = `${gradientType}(${firstColor.value}, ${secondColor.value})`;
        } else {
            body.style.background = `${gradientType}(${gradientDirection.value}, ${firstColor.value}, ${secondColor.value})`;
        }
        gradientGenerate.textContent = `${body.style.background};`;
    };

    // Function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to set a random gradient
    const setRandomGradient = () => {
        firstColor.value = getRandomColor();
        secondColor.value = getRandomColor();
        changeBackground();
    };

    // Function to set only the first color to a random value
    const setOnlyFirstRandomGradient = () => {
        firstColor.value = getRandomColor();
        changeBackground();
    };

    // Function to set only the second color to a random value
    const setOnlySecondRandomGradient = () => {
        secondColor.value = getRandomColor();
        changeBackground();
    };

    // Function to set a random gradient direction
    const setRandomDirection = () => {
        const randomNum = Math.floor(
            Math.random() * gradientDirection.options.length
        );
        gradientDirection.value = gradientDirection.options[randomNum].value;
        changeBackground();
    };

    // Function to initialize the background generator on page load
    const loadFunctions = () => {
        setRandomGradient();
        setRandomDirection();
    };

    window.addEventListener('load', loadFunctions);

    firstColor.addEventListener('input', changeBackground);
    secondColor.addEventListener('input', changeBackground);
    randomButton.addEventListener('click', setRandomGradient);
    firstRandomBtn.addEventListener('click', setOnlyFirstRandomGradient);
    secondRandomBtn.addEventListener('click', setOnlySecondRandomGradient);
    gradientDirection.addEventListener('change', changeBackground);
    randomDirection.addEventListener('click', setRandomDirection);
};

myBgGenerator();
