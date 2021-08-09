'use strict';

function isEven(num){
    if ( num % 2 === 0 ){
        console.log(`El número introducido es par.`);
    }
    else {
        console.log(`El número introducido es impar.`);
    }
}

console.log(isEven(4));

console.log(isEven(9));

console.log(isEven(-45));

console.log(isEven(34567));

console.log(isEven(86));