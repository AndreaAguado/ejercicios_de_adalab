'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

let evens = [];
let multiplesOf3 = [];

// function bestLostNumber() {

// }

function findEvens(array) {
    let evens = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0) {
            evens.push(array[index]);
        }        
    }
    console.log(evens);
    return evens;
}
findEvens(lostNumbers);

// function findMultiplesOf (array){

// }