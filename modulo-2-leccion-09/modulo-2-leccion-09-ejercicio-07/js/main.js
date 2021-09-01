'use strict';

function christmasTree (size) {
    // let spaces = ' ';
    // for (let index = 0; index < size; index++) {
    //     spaces += ' ';        
    // }    
    let spaces = createSpacer(8);
    let spaces2;
    let aux='▲';
    let top = '★';
    let trunk = '|';
    for (let index = 0; index < size; index++) {   
        if (index < 1) {
            //si esta en el primer elemento pone la estrella
            console.log(spaces + top);     
        }    
        else if (index < 2) {
            //si esta en el segundo elemento pone arbol
            console.log(spaces + aux);
            spaces2 = spaces.slice(0, -1);
        }
        else if (index === size-1){
            //si esta en el ultimo elemento pone tronco
            console.log( spaces + trunk);           
        }
        else {
            aux = '▲'+ aux + '▲';
            // spaces2 = spaces2 - ' ';
            spaces2 = spaces2.slice(0, -1);
            console.log(spaces2 + aux);
        }        
    }
}

function createSpacer (size){
    let spaces = '';
    for (let index = 0; index < size-1; index++) {
        spaces += ' ';        
    }
    return spaces;
}

christmasTree(8);

// function recortar (){
//     let string = 'andrea';
//     let string2 = string.slice(0, -1);
//     console.log(string2);
// }

// recortar();