'use strict';

const link1 = document.querySelector('.js_header__link1');
const link2 = document.querySelector('.js_header__link2');
const link3 = document.querySelector('.js_header__link3');

function handleLinks (event){
    console.log(`I'm in`);
    const clicked = event.preventDefault();
}

link1.addEventListener('click', handleLinks);
link2.addEventListener('click', handleLinks);
link3.addEventListener('click', handleLinks);