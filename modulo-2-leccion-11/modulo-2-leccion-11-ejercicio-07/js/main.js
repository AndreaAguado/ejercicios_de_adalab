'use strict';

const inputs = document.querySelectorAll('.js-input');
const paragraph = document.querySelector('.js-text');

function handleInput(event) {
    console.log('estoy aqui');
    let written = event.currentTarget.value;
    let userData = [];
    userData.push(inputs[0].value, inputs[1].value);
    console.log(userData);
    paragraph.innerHTML += written + ' ';

    localStorage.setItem('userData', JSON.stringify(userData));
}

function hasContent () {
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data !== null){
        inputs[0].value = data[0];
        inputs[1].value = data[1];
        paragraph.innerHTML = data[0] + ' ' + data[1];
    }
}

hasContent();

for (const input of inputs) {
    input.addEventListener('change', handleInput);
}

