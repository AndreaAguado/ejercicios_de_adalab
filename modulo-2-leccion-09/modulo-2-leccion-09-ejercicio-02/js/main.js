'use strict';


function get100numbers() {
    let array = [];
    for (let index = 0; index < 100; index++) {
        array.push(index + 1);        
    }
    console.log(array);
    return array;
}

function getReversed100Numbers () {
    let reversedArray = get100numbers();
    reversedArray.reverse();
    console.log(reversedArray);
    return reversedArray;
}

getReversed100Numbers();