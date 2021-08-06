'use strict';

// data that's going to be sent to the page

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

// variables where the data is going to be stored

// const imgDog1 = document.querySelector('.img1');
// const imgDog2 = document.querySelector('.img2');
// const imgDog3 = document.querySelector('.img3');

// const nameDog1 = document.querySelector('.name1');
// const nameDog2 = document.querySelector('.name2');
// const nameDog3 = document.querySelector('.name3');

const dog1 = document.querySelector('.dog1');
const dog2 = document.querySelector('.dog2');
const dog3 = document.querySelector('.dog3');

dog1.innerHTML = `<img src=" ${firstDogImage} " alt="image of a dog">
<p> ${firstDogName}</p>`;

dog2.innerHTML = `<img src=" ${secondDogImage} " alt="image of a dog">
<p> ${secondDogName}</p>`;

dog3.innerHTML = `<img src=" ${thirdDogImage} " alt="image of a dog">
<p> ${thirdDogName}</p>`;