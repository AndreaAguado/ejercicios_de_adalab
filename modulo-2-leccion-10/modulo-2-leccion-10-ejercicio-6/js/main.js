'use strict';

const title = document.querySelector('.js-main__title');
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

//Based of the length of the breeds names list, calcMax(array) sets a top to which the integer we want to make a petition for will have to adjust to.
function calcMax(array){
    let max = array.length-1;
    return max;
}

//requestRandomNumToAPI(max,array) using the max value previously obtained, asks for a random number within the range 0-max adapting for that the URL by appending ?max= to it :
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

// chooseBreed(breeds,randomNum) takes the list of breeds and picks the element whose position matches with the random number
function chooseBreed(breeds,randomNum){
    let breed = breeds[randomNum];
    return breed;
}
//Now that there is a dog breed requestDogImage(breed) request one random image of said breed by making a new petition
function requestDogImage(breed){
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then( response => response.json())
    .then( data => {
        let dog = data.message;
        image.src = dog;
        title.innerHTML = 'Raza: ' + breed;
        console.log(dog);
        // return dog;
    })
}

//by clicking the button all the functions are triggered once requestToDogAPI is called:
function handleButton(){
    requestToDogAPI();
}

button.addEventListener('click',handleButton);

