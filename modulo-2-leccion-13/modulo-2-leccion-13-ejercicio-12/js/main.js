'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

console.log(users);

//sort by name alphabetically

let alphabetically = []; 
for (const item of users) {
  alphabetically.push(item);
}

alphabetically.sort((a,b) => {
  let ordered;
  a = a.name.toUpperCase();
  b = b.name.toUpperCase();
  if(a > b) {
    ordered = -1;
  }
  // else if ( a < b){
  //   ordered = 1;
  // }
  // else {
  //   ordered = 0;
  // }
  // ordered = a - b ;
  return ordered;
})

console.log(alphabetically);

//sort by pin

let orderedUsers = []; 
for (const item of users) {
  orderedUsers.push(item);
}

orderedUsers.sort((a,b)=> a.pin - b.pin);
console.log(orderedUsers);