'use strict';


function requestToDogAPI(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then( response => response.json())
    .then( dogBreeds => {
        const breeds = dogBreeds.message;
        console.log(breeds);
    
    })
}

requestToDogAPI();