let inputCelcius = document.getElementById('celcius');
let inputFahrenheit = document.getElementById('fahrenheit');
let inputKelvin = document.getElementById('kelvin');

function convertCelcius() {
    toFahrenheit = (inputCelcius.value * 1,8) + 32; 
    toKelvin = inputCelcius.value +  273.15; 

    console.log(22)
    
    inputFahrenheit.value = toFahrenheit;
    inputKelvin.value = toKelvin;
}

function convertFahrenheit() {
    toCelcius = (inputFahrenheit.value - 32) / 1.8;
    toKelvin = (inputFahrenheit.value - 32) * (5 / 9) + 273.15;
    
    inputCelcius.value = toCelcius;
    inputKelvin.value = toKelvin;
}

function convertKelvin() {
    toCelcius = inputKelvin.value - 273.15;
    toFahrenheit = (1.8 * (inputKelvin.value - 273.15) + 32);

    inputCelcius.value = toCelcius;
    inputFahrenheit.value = toFahrenheit; 
}

function clearFields() {
    inputCelcius.value = '';
    inputFahrenheit.value = '';
    inputKelvin.value = '';
}   