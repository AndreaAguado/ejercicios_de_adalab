'use strict';

const list = document.querySelector('.js_list');

fetch('https://ghibliapi.herokuapp.com/films/')
.then(response => response.json())
.then(data =>{
    console.log(data);
    let html= '';
    for (const movie of data) {
        console.log(movie.title);
        html += ` <li class="list-item js_list_item">`;
        html += movie.title;
        html += `</li>`;
    }  
    list.innerHTML += html;
})

