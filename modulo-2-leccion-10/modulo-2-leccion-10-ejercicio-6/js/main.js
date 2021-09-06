'use strict';

const image = document.querySelector('.js-img');

const button = document.querySelector('.js-button');

//requestToDogAPI() brings all the dog breeds inside an object and put them in an array
function requestToDogAPI(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then( response => response.json())
    .then( data => {
        let dogBreeds = data;
        const breeds = dogBreeds.message;
        let breedsNamesList = retrieveBreeds(breeds); 
        console.log(breedsNamesList);     
        let max = calcMax(breedsNamesList);
        console.log(max);
        requestRandomNumToAPI(max,breedsNamesList);
    })
}

//retrieveBreeds(breeds) converts all the breeds to an array of breeds names and then, it figures the max number of random numbers 
function retrieveBreeds(breeds){
    let breedsList = [];
    let index = 0;
    for (const property in breeds) {
        breedsList[index] = property;
        index++;
      }
    //   console.log(breedsList);
      calcMax(breedsList);
      return breedsList;
}

function calcMax(array){
    let max = array.length-1;
    return max;
}

function requestRandomNumToAPI(max,array){
    fetch('https://api.rand.fun/number/integer?max='+ max)
    .then( response => response.json())
    .then( data => {
        let randomNumber = data.result;
        console.log(randomNumber);
        let chosenDog = chooseBreed(array,randomNumber);
        console.log(chosenDog);
        requestDogImage(chosenDog);
        // return chosenDog;
    })
}

function chooseBreed(breeds,randomNum){
    let breed = breeds[randomNum];
    return breed;
}

function requestDogImage(breed){
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then( response => response.json())
    .then( data => {
        let dog = data.message;
        image.src = dog;
        console.log(dog);
        // return dog;
    })
}

function handleButton(){
    requestToDogAPI();
}

button.addEventListener('click',handleButton);

