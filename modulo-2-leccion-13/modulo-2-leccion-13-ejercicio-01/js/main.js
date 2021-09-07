'use strict';

const marks = [5, 4, 6, 7, 9];

//inflatedMarks is only applied to 1 vble at once. When given to map, map applies inflatedMarks to each and every element of the array, that's why inflatedMarks DOES NOT work with a for:

const inflatedMarks = (mark) => mark +1; 

const newMarks = marks.map(inflatedMarks);
console.log(newMarks);