'use strict';

const updateButton = document.querySelector('.js_update');

const smiley = document.querySelector('.js_title');

const select = document.querySelector('.js_select');

const body = document.querySelector('.body');

function changeMood (){
    smiley.innerHTML = select.value;
    let number = getRandomInt(100);
    if (number % 2 !== 0){
        body.classList.toggle('odd');
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

  updateButton.addEventListener('click', changeMood);
