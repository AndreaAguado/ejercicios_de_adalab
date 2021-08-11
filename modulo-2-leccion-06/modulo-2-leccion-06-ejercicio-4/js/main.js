'use strict';

const button = document.querySelector('.button');

function logEvent (event) {
    console.log(event);
}

button.addEventListener('click', logEvent);