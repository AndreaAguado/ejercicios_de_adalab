'use strict';

let counter = 0;

const page = document.querySelector('js-body');
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.js-time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);