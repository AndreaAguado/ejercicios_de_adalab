'use strict';

const runners = [
    { name: 'Gregory Goyle', time: 56, student: true },
    { name: 'Nymphadora Tonks', time: 9, student: false },
    { name: 'Luna Lovegood', time: 45, student: true },
    { name: 'Cedric Diggory', time: 28, student: true },
    { name: 'Cho Chang', time: 35, student: true }
  ];


const isStudent = (data) => data.student === true;

const winner = ( provWinner, data) => {
    let win;
    if(data.time <= provWinner){
        console.log('entro en if');
        win = data.name;
        provWinner = data.time;
        console.log(win);
    }
    else{
        console.log('entro en else');
        win = provWinner;
        console.log(win);
    }
    return win;
}

const students = runners.filter(isStudent).reduce(winner, runners[0].time);
console.log(students);


