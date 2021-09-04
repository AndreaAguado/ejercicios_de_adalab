'use strict';

const output = document.querySelector('.js-result');

const input = document.querySelector('.js-input');

const button = document.querySelector('.js-submit');

const list = document.querySelector('.js-char-list');

const buttonNext = document.querySelector('.js-button');



// when the user introduces a search term and clicks the button handleButton () trows a search to the API using that term 
function handleButton () {    
    if( isInLocalStorage(input.value)){
        console.log('Ya estaba en localStorage');
        let info = getFromLocalStorage(input.value);
        writeInPage(info);
    }
    else{
        console.log('No estaba en localStorage');
        let url = urlMaker(input.value);
        console.log(url);
        requestAPI(url);
    }
}

//if requested info is not in local storage a petition is made to the API using requestAPI(url)
function requestAPI(url){
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        writeInPage(characters);
    })
}

//writeInPage(people) displays in the page whatever info has been retrieved
function writeInPage(characters) {
    let people = characters.results;
    if(characters.count > 0) {
        list.innerHTML = '';
        for (let i = 0; i < people.length; i++) {
        list.innerHTML += `<li class="list-item">${people[i].name} : ${people[i].gender}</li>`;              
    }
    }
    else {
        list.innerHTML = `<li class="list-item">No se encontraron resultados</li>`; 
    }
    if(characters.next !== null){
        buttonNext.classList.remove('hidden');
    }
    saveToLocalStorage(input.value,characters);
}

let page = 2;

//If there were more pages to show, a second button would appear to fetch said pages, handleButton2 () is the function in charge of that when that button is clicked 
function handleButton2 () {
    console.log('estoy aqui');
    let url = addNextPage(input.value, page);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        console.log(characters.next);
        const people = characters.results;
            // list.innerHTML = '';
            for (let i = 0; i < people.length; i++) {
            list.innerHTML += `<li class="list-item">${people[i].name} : ${people[i].gender}</li>`;     
        }
        if(characters.next !== null){
            page++;
        }
        else {
            buttonNext.classList.add('hidden');
        }
       
    })
    
}

//urlMaker(input) creates the URL fetch will use according to what the user introduced in the browser
function urlMaker(input){
    const url = 'https://swapi.dev/api/people/?search=' + input ;
    return url;
}

//addNextPage(input, page) creates a new URL for a new search in case there would be more pages of content to show
function addNextPage(input, page){
    let urlBeggining = urlMaker(input);
    let url = urlBeggining + '&page=' + page;
    return url;
}

//saveToLocalStorage(input, information) saves in storage the search of the user for further use
function saveToLocalStorage(input, information) {
    let key = `'${input}'` ;
    localStorage.setItem(key, JSON.stringify(information));
}


//getFromLocalStorage(input) returns the search the user made
function getFromLocalStorage(input){
    let key = `'${input}'` ;
    let savedInfo = JSON.parse(localStorage.getItem(key));
    return savedInfo; 
}

//isInLocalStorage(input) browses the local storage to see if the info requested is there and in that case not making a new request to the server
function isInLocalStorage(input){
    let isIt;
    if(getFromLocalStorage(input) === null){
        isIt = false;
    }
    else {
        isIt = true;
    }
    return isIt;
}

button.addEventListener('click', handleButton);

buttonNext.addEventListener('click', handleButton2);