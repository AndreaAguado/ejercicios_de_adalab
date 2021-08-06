'use strict';
const nYears = document.querySelector('.age'); 
const nHours = document.querySelector('.hours');

let myAge = nYears.innerHTML;

function yearsOfLife (age) {
    let ageInHours = age * 365 * 24;
    return ageInHours;
}

nHours.innerHTML = yearsOfLife(myAge);

console.log('You have lived a total of ' + yearsOfLife(myAge) + ' hours');