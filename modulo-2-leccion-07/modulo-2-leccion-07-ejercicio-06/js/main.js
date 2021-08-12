'use strict';

const input = document.querySelector('.js_input');

const info = document.querySelector('.paragraph');

function inputHandler (){
    info.innerHTML = `Qué casualidad, a mi también me encanta ${input.value}. Tenemos mucho en común!`;
}

input.addEventListener('change', inputHandler);