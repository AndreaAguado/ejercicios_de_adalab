'use strict';

//apartado a:
let numbers = [20, 54, 76, 33, 100];

let sum = 0;
for (let i = 0; i < 4; i++ ) {
    sum += numbers[i];
    console.log(sum);
}

let media = sum / 5;

console.log('Media =', media);

// apartado b:

numbers = [20, 54, 76, 33, 100, 1412];

sum = 0;
for (let i = 0; i < 5; i++ ) {
    sum += numbers[i];
    console.log(sum);
}

media = sum / 6;

console.log('Media =', media);


function average (numbers) {
    let sum = 0;
    let media;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];        
    }

    media = Math.round(sum / numbers.length);
}

average(numbers);