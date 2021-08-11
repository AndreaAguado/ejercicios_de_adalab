'use strict';

const input = document.querySelector('.input');

console.dir(input);

function write () {
    console.log(`input.value: ${input.value}`);
    console.log(`input.nodeValue: ${input.nodeValue}`);
    console.log(`input.required: ${input.required}`);
}

// input.value recoge el valor que hay escrito en el input

// input.nodeValue

// input.required puede valer true o false, devuelve si el campo del form es obligatorio o no

input.addEventListener('change',write);

