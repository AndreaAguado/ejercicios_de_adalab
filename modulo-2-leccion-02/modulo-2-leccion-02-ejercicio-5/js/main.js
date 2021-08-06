'use strict';

function yearsOfLife (age) {
    let ageInHours = age * 365 * 24;
    return ageInHours;
}

console.log('You have lived a total of ' + yearsOfLife(60) + ' hours');