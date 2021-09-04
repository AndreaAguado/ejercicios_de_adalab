'use strict';

const image = document.querySelector('.img');

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

  function showImage(data) {
      image.setAttribute('src',data[0].url);
  }