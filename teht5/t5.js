'use strict';

const kohde = document.querySelector('#target');

let numero = prompt('Anna positiivinen luku:');
numero = parseInt(numero);

let summa = 0;

for (let i = 1; i <= numero; i++) {
  summa += i;
}
kohde.innerHTML = 'Summa on ' + summa;
