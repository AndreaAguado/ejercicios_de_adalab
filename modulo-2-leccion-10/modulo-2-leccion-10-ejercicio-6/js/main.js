'use strict';

fetch('https://rand.fun/number/integer?max=')
.then( response => response.json())
.then (randomNumber => {
    
})

fetch ('https://dog.ceo/api/breeds/list/all')
.then( response => response.json())
.then( dogBreeds => {
    const breeds = dogBreeds.message;
    return fetch ('https://dog.ceo/api/breed/' + breeds[randomNumber] + '/images/random')
}
  
    )