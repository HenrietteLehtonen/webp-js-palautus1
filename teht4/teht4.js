'use strict';

const kohde = document.querySelector('#target');

const pisteet = prompt('Anna pisteesi:');

if (pisteet <= 39) {
  kohde.innerHTML = 'Arvosanasi on 0.';
} else if (pisteet == 40 || pisteet <= 51) {
  kohde.innerHTML = 'Arvosanasi on 1.';
} else if (pisteet == 52 || pisteet <= 63) {
  kohde.innerHTML = 'Arvosanasi on 2.';
} else if (pisteet == 64 || pisteet <= 75) {
  kohde.innerHTML = 'Arvosanasi on 3.';
} else if (pisteet == 76 || pisteet <= 87) {
  kohde.innerHTML = 'Arvosanasi on 4.';
} else if (pisteet == 89 || pisteet <= 100) {
  kohde.innerHTML = 'Arvosanasi on 5.';
}
