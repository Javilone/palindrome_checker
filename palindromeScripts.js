const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('text-input');
const result = document.getElementById('result');

function checkPalindrome(userInput) {
    // Normalizo la cadena del usuario sin tildes y a mayusculas
    const normalizedInput = userInput.value.normalize("NFD").replace(/[ ,.:\-/_)(\u0300-\u036f]/g, "").toUpperCase().trim();

    // Obtengo la frase sin espacios y también la frase del revés
    const noSpacesInput = normalizedInput.replace(/ /g, "");
    const reversedInput = normalizedInput.split('').reverse().join('');

    // Devuelvo resultados booleano
    return noSpacesInput === reversedInput; 
}

const checkInput = () => {
    const originalInput = userInput.value;
    // Llamo a al función que detecta palindromos
    // Recibiré un booleano
    const checking = checkPalindrome(userInput);
    // Compruebo el input para detectar espacio blanco y mostrar alerta
    const normalizedInput = userInput.value.normalize("NFD").replace(/[ ,.:\-/_)(\u0300-\u036f]/g, "").toUpperCase().trim();

    if (normalizedInput === '') {
        alert("Please input a value");
    } else if (checking) {
        result.textContent = `${originalInput} is a palindrome`;
    } else {
        result.textContent = `${originalInput} is not a palindrome`;
    }
};


checkButton.addEventListener('click', checkInput);