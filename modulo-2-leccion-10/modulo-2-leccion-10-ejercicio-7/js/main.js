'use strict';
const dogList = document.querySelector('.js-dog-list');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

function getBreedImages () {
  const promises = [createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise()];
//   const promises = [createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(), createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise(),createPromise(), createPromise()];
  Promise.all(promises)
    .then(responses => {
      for (let i = 0; i < responses.length; i++) {
          dogList.innerHTML +=  `<img class="dog" src="${responses[i].message}" alt="Dog"></img>`;
      }
    });
}


// function createPromises(functionName, amount) {
//     const promises = [];
//     const fName = functionName + '()';
//     for (let index = 0; index < amount; index++) {
//        promises.push(fName);
//     }    
//     return promises;
// }

// console.log(createPromises('write', 8));


const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);