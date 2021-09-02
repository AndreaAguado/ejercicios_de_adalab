'use strict';

function getInteger() {
    fetch("https://api.rand.fun/number/integer")
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-result').innerHTML = data.result
      });
  }

  function getPassword() {
      fetch("https://api.rand.fun/text/password?length=25")
      .then(response => response.json())
      .then(data => {
          document.querySelector('.js-result').innerHTML = data.result;
        //   document.querySelector('js-result').classList.add('blue');
      } );
  }
  document.querySelector('.js-button').addEventListener("click", getInteger);
  document.querySelector('.js-button2').addEventListener("click", getPassword);