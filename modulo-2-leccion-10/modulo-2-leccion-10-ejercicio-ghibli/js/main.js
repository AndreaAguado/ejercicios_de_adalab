'use strict';

// const output = document.querySelector('.js_text');

fetch('https://ghibliapi.herokuapp.com/films/')
.then(response => response.json())
.then(data =>{
    console.log(data);
    for (const movie of data) {
        console.log(movie.title);
    }  
})

