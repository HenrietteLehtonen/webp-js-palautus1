'use strict';

// KIRJOITUS HTML POHJAAN
// huom # id target !

let celcius = prompt('Anna lämpötila celcius asteina:');
celcius = parseInt(celcius); // muutetaan string numeroiksi
const kelvin = celcius + 273.15;
const fah = (celcius * 9) / 5 + 32;

document.querySelector('#lampotila').innerHTML =
  'Lämpötila ' + celcius + ' °C on ' + kelvin + ' °K ja ' + fah + ' °F';

// npm i
