'use strict';

function IVA (price) {
    let tax = Math.round(price * 0.21);
    console.log(`Precio sin IVA: ${price} €, IVA: ${tax} € y Total: ${tax + price} €`);
}

console.log(IVA(65));

console.log(IVA(10));

console.log(IVA(34.95));