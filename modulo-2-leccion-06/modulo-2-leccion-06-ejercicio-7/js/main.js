'use strict';


const person = { };

const job = 'developer';
person.firstName = 'Andrea';
person.lastName = 'Aguado';
person.age = 26;
person.job=job;

console.log(person);

person.firstName = 'Paquita';
person.age = person.age + 1;

console.log(person);