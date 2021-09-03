'use strict';

const input = document.querySelector('.js-input');
const paragraph = document.querySelector('.js-text');

function handleInput() {
    paragraph.innerHTML = input.value;
}

input.addEventListener('keyup', handleInput);