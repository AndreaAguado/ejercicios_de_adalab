'use strict';

const numbers = [1, 2, 3];
const list = document.querySelector('.js-list');
const newElement1 = document.createElement('li');
const newElement2 = document.createElement('li');
const newElement3 = document.createElement('li');


// for (let i = 0; i < numbers.length; i++) {
//    const newContent= document.createTextNode(numbers[i]);
//    newElement.appendChild(newContent);
//    console.log(newElement);
//    list.appendChild(newElement);    
// }

for (let i = 0; i < numbers.length; i++) {
    let newContent;
    if(i===1){
        newContent= document.createTextNode(numbers[i]);
        newElement1.appendChild(newContent);
        console.log(newElement1);
        list.appendChild(newElement1); 
    }
    else if(i===2){
        newContent= document.createTextNode(numbers[i]);
        newElement2.appendChild(newContent);
        console.log(newElement2);
        list.appendChild(newElement2); 
    }
    else {
        newContent= document.createTextNode(numbers[i]);
        newElement3.appendChild(newContent);
        console.log(newElement3);
        list.appendChild(newElement3); 
    }
   
 }