'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];


//   Buscar usuaria cuyo pin=5232
  const problematic = users.find((users) => users.pin === 5232); 
  console.log(problematic);

//   Borrar usuaria cuyo pin=5232
    const dropoutIndex = users.findIndex((users) => users.pin === 5232);
    const newUsers = users.splice(dropoutIndex,1);
    console.log(users);


