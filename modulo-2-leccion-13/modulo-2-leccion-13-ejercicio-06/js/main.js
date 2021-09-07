'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];


const findEven = (user) => {
    let ok;
    if( user.pin % 2 === 0){
        ok = user;
    }
    return ok;
};

const evenOnes = users.filter(findEven);

console.log(evenOnes);