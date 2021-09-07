'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];


const findEven = (number) => number % 2 === 0;

const evenOnes = pins.filter(findEven);

console.log(evenOnes);