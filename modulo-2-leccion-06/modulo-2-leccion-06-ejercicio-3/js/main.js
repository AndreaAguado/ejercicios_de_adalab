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


adalaber1.showBio = (age, job, name) => {
    console.log(`Mi nombre es ${name}, tengo ${age} años y soy ${job}`);
};
 
adalaber1.showBio(adalaber1.age,adalaber1.job, adalaber1.name);

adalaber2.showBio = (age, job, name) => {
    console.log(`Mi nombre es ${name}, tengo ${age} años y soy ${job}`);
};
 
adalaber1.showBio(adalaber2.age,adalaber2.job, adalaber2.name);

paragraph.innerHTML = `Me llamo ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`;

paragraph.innerHTML += ` <p class="paragraph">Yo soy ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}</p>`;
