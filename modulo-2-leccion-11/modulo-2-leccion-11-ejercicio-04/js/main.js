'use strict';

const input = document.querySelector('.js-input');
const paragraph = document.querySelector('.js-text');

function handleInput() {
    paragraph.innerHTML = input.value;
    localStorage.setItem('name', input.value);
}

function hasContent () {
    paragraph.innerHTML= localStorage.getItem('name');
    input.value = localStorage.getItem('name');
}

hasContent();


input.addEventListener('keyup', handleInput);