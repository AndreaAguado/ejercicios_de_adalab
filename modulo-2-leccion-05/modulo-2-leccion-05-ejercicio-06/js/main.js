'use strict';

// const buttonElement = document.querySelector('.button');

const input = document.querySelector('.input');
const paragraph = document.querySelector('.paragraph');

// // Función de ejemplo de los apuntes:
// function handleButtonClick(event) {
//     console.log(event.currentTarget);
// }

// buttonElement.addEventListener('click', handleButtonClick);

//Funcion que recoge los inputs:

function updateInfo(event){
    // let aux=event.currentTarget.value;
    paragraph.innerHTML=event.currentTarget.value;
    console.log(event.currentTarget.value);
}

input.addEventListener('keyup', updateInfo);