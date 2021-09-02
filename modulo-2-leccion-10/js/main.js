'use strict';

function getEmoji() {
    fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result;
      });
  }
  document.querySelector('.js-emoji').addEventListener('click', getEmoji);
  document.querySelector('body').addEventListener('keyup', getEmoji); 
  //esta nomenclatura es equivalente a : 
  //const x =   document.querySelector('body'); 
  //x.addEventListener('keyup', getEmoji);