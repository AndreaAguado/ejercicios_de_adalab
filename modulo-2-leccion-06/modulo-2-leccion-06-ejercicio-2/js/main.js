'use strict';

const paragraph = document.querySelector('.paragraph');
const adalaber1 = {
    name :'Susana',
    age : 34,
    job : 'Periodista'
};

adalaber1.run = () => { console.log(`Estoy corriendo`); };

adalaber1.runAMarathon = distance => { console.log(`Estoy corriendo una marathon de ${distance} kilómetros!`);
};

adalaber1.run();
adalaber1.runAMarathon(50);
paragraph.innerHTML = `Me llamo ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`;