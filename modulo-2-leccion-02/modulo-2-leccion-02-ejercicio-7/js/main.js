'use strict';

// title stores the content of h1
const title = document.querySelector('h1');

// newName contains the content of the class inside the span, which will be the name
const newName = document.querySelector('.name'); 

// my name is the one the will appear on screen
const myName = 'Andrea';
newName.innerHTML = myName;

let myContent = `Hello ${ myName } nice to meet you`;
console.log(myContent);

