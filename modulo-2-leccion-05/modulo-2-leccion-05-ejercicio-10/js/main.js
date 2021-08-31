'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector('.js_button');
const movies = document.querySelector('.js_movies');
const movie1 = document.querySelector('.js_movie1');
const movie2 = document.querySelector('.js_movie2');
const movie3 = document.querySelector('.js_movie3');
const movie4 = document.querySelector('.js_movie4');
const movie5 = document.querySelector('.js_movie5');


function handleButton (){
    movie1.innerHTML = inception;
    movie2.innerHTML = theButterFlyEffect ;
    movie3.innerHTML = eternalSunshineOfTheSM ;
    movie4.innerHTML = blueVelvet ;
    movie5.innerHTML = split;
}
function handleMovies (event) {
    const movieClicked = event.currentTarget;
    console.log(movieClicked.innerHTML);
}

button.addEventListener('click', handleButton);

movie1.addEventListener('click',handleMovies);
movie2.addEventListener('click',handleMovies);
movie3.addEventListener('click',handleMovies);
movie4.addEventListener('click',handleMovies);
movie5.addEventListener('click',handleMovies);
