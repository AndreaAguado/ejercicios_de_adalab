'use strict';

function christmasTree (size) {
    let aux='▲';
    let top = '★';
    let trunk = '|';
    for (let index = 0; index < size; index++) {   
        if (index < 1) {
            console.log(top);
        }    
        else if (index < 2) {
            console.log(aux);

        }
        else if (index === size-1){
            console.log(trunk);
        }
        else {
            aux = '▲'+ aux + '▲';
            console.log(aux);
        }

        
    }
}

christmasTree(8);