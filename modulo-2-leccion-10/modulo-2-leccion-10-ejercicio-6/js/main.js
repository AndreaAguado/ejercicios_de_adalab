'use strict';


function requestToDogAPI(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then( response => response.json())
    .then( dogBreeds => {
        const breeds = dogBreeds.message;
        console.log(breeds);
        retrieveBreeds(breeds)
    
    })
}

function retrieveBreeds(breeds){
    let breedsList = [];
    let index = 0;
    for (const property in breeds) {
        breedsList[index] = property;
        index++;
      }
      console.log(breedsList);

}
function requestRandomNum(){
    fetch('https://api.rand.fun/number/integer')
    .then( response => response.json())
    .then( randomNumbers => {
        console.log(randomNumbers);
    })

}
requestToDogAPI();
requestRandomNum();