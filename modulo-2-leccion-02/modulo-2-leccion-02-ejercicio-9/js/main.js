'use strict';

const myName = document.querySelector('.name');
const varName = 'Andrea Aguado Moleón';
const n_length = document.querySelector('.name_length');


myName.innerHTML += varName;
console.log(myName);
n_length.innerHTML += varName.length; 
console.log(n_length);

