'use strict';

const image = document.querySelector('.js-img');

const button = document.querySelector('.js-button');

function requestKittens() {
    fetch('https://api.thecatapi.com/v1/images/search?format=json', {
  headers: {
    "x-api-key": "c33dc4111cbf4beb813929ee97a3f362",
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showImage(data);

  });
}

// function asd(){
//     fetch('https://images.abstractapi.com/v1/', {
//         headers: {
//           "x-api-key": "c33dc4111cbf4beb813929ee97a3f362",
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           showImage(data);
      
//         });
// }
// asd();
requestKittens();
function showImage(data) {
    image.setAttribute('src',data[0].url);
}

function handleButton(){
    requestKittens();
}

button.addEventListener('click',handleButton);
