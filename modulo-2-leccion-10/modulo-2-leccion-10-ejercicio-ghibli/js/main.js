'use strict';

const list = document.querySelector('.js_list');
const button = document.querySelector('.js_button');
const input = document.querySelector('.js_input');

let movies = [];
let data = [];
let listItem;

fetch('https://ghibliapi.herokuapp.com/films/')
.then(response => response.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        movies[i] = data[i];       
    }
    console.log(movies);
    displayList();
})

function displayList(){
    let html= '';
    for (const movie of movies) {     
        console.log(movie.title);
        html += ` <li class="list-item js_list_item">`;
        html += movie.title;
        html += `</li>`;
    }  
    list.innerHTML += html;
    listItem = document.querySelector('.js_list_item');
}

function filterBySearch(){
    // let url_tail = input.ariaValueMax;

}

function handleButton(){

}


listItem.addEventListener('click', filterBySearch);
button.addEventListener('click',handleButton);

