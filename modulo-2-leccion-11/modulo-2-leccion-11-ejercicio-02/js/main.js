'use strict';

const output = document.querySelector('.js-result');

const input = document.querySelector('.js-input');

const button = document.querySelector('.js-submit');

const list = document.querySelector('.js-char-list');

function handleButton () {
    const url = urlMaker(input.value);
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        const people = characters.results;
        if(characters.count > 0) {
            list.innerHTML = '';
            for (let i = 0; i < people.length; i++) {
            list.innerHTML += `<li class="list-item">${people[i].name} : ${people[i].gender}</li>`;          
        }
        }
        else {
            list.innerHTML = `<li class="list-item">No se encontraron resultados</li>`; 
        }

    })
  

}

button.addEventListener('click', handleButton);

function urlMaker(input){
    const url = 'https://swapi.dev/api/people/?search=' + input ;
    return url;
}