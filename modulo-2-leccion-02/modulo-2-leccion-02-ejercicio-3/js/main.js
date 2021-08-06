'use strict';

// 2 kilos de kiwis a 5€ / kg
// 3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
// Medio kilo de uvas a 4€ / kg
const kiwis = 2;
const pears = 3;
const grapes = 0.5;
console.log('We have ' + kiwis + ' kilos of kiwis at 5€/kg, ' + pears + ' kilos of pears at 3€/kg and ' + grapes + ' kilos of grapes at 4€/kg');
// let res = kiwis + pears + grapes;
let res = kiwis * 5 + pears * 2 + grapes * 4;
console.log('The total price is: ' + res + ' €' ) ;
