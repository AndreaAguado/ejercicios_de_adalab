'use strict';

const paragraph = document.querySelector('.paragraph');
const adalaber1 = {
    name :'Susana',
    age : 34,
    job : 'Periodista'
};
const adalaber2 = {
    name :'Rocío',
    age : 25,
    job : 'Actriz'
};

paragraph.innerHTML = `Me llamo ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`;

paragraph.innerHTML += ` <p class="paragraph">Yo soy ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}</p>`;
