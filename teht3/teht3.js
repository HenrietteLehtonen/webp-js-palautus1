'use strict';

const kohde = document.querySelector('#target');

const sivu1 = +prompt('Anna ekan sivu: ');
const sivu2 = +prompt('Anna toka sivu: ');
const sivu3 = +prompt('Anna kolmas sivu: ');

if (sivu1 === sivu2 && sivu2 === sivu3) {
  // tasasivu
  kohde.innerHTML = 'Kolmio on tasasivuinen.';
} else if (sivu1 !== sivu2 && sivu2 !== sivu3 && sivu3 !== sivu1) {
  // epäsäännöllinen
  kohde.innerHTML = 'Epäsäänöllinen';
} else {
  // tasakylkinen
  kohde.innerHTML = 'Kohde on tasakylkinen;';
}
