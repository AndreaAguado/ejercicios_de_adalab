'use strict'; 

// let dogAge = 8;

function dogToHuman (dogAge){
    if (dogAge === 1){
        return console.log('Tu perro tiene 15 años humanos');
    }
    else if (dogAge === 2){
        return console.log(`Tu perro tiene ${15+9} años humanos`);
    }
    else {
        let newAge = (dogAge - 2)*5 + 15 + 9;
        return console.log(`Tu perro tiene ${newAge} años humanos`);
    }
}
console.log(dogToHuman(1));

// if (dogAge === 1){
//     console.log('Tu perro tiene 15 años humanos');
// }
// else if (dogAge === 2){
//     console.log(`Tu perro tiene ${15+9} años humanos`);
// }
// else {
//     let newAge = (dogAge - 2)*5 + 15 + 9;
//     console.log(`Tu perro tiene ${newAge} años humanos`);
// }