'use strict';

let numeroInput = prompt('Anna positiivinen luku:');
let numero = parseInt(numeroInput);

let summa = 0;
let taulukko = '<table>';

if (numero > 0) {
  const kohde = document.querySelector('#target');
}

if (numero > 0) {
  for (let i = 1; i <= numero; i++) {
    taulukko += '<tr>';
    for (let j = 1; j <= numero; j++) {
      let tulo = i * j;
      taulukko += `<td>${tulo}</td>`;
    }
    taulukko += '</tr>';
  }
  taulukko += '</table>';
  kohde.innerHTML = taulukko;
}
