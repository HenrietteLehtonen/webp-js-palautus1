'use strict';

/*

Write a program that calculates the distance between two points on a 2D plane and displays the result in an HTML document. The program should prompt the user for the coordinates of two points (x, y) and then calculate the Euclidean distance between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)
In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer promts if you use string methods like split().
3p

*/
const target = document.querySelector('#target');

const x1 = prompt('Anna x1:');
const y1 = prompt('Anna y1:');

const x2 = prompt('Anna x2:');
const y2 = prompt('Anna y2:');

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

target.innerHTML = 'Pisteiden välinen etäisyys on: ' + distance;
