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
    //   return breedsList;
      calcMax(breedsList);
}

function calcMax(array){
    let max = array.length;
    console.log(max);
    requestRandomNum(max);
}

function requestRandomNum(max){
    fetch('https://api.rand.fun/number/integer?max='+max)
    .then( response => response.json())
    .then( randomNumbers => {
        console.log(randomNumbers);
    })

}
requestToDogAPI();