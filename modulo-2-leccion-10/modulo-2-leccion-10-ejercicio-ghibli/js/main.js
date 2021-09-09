'use strict';

const list = document.querySelector('.js_list');
const button = document.querySelector('.js_button');

let movies = [];
let data = [];
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
    console.log(movies.title);
}
function handleButton(){

}

button.addEventListener('click',handleButton);

