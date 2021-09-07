'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const addGreetings = (personName) => 'Bienvenida ' + personName; 

const greetings = names.map(addGreetings);
console.log(greetings);