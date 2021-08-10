'use strict';

const button = document.querySelector('.button');
const title = document.querySelector('.title');

function showMessage (){
    console.log("Bien! Mi botón funciona!! ^u^");
    title.innerHTML = 'Congratulations, this button WORKS!';
}

button.addEventListener('click',showMessage);