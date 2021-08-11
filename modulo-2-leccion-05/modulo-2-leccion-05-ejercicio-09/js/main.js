'use strict';

const teacher1 = document.querySelector('.teacher1');

const teacher2 = document.querySelector('.teacher2');

const teacher3 = document.querySelector('.teacher3');

const fav1 = document.querySelector('.favorite');
const fav2 = document.querySelector('.favorite');
const fav3 = document.querySelector('.favorite');

function selectTeacher (event){

    const teacherSelected = event.currentTarget;
    console.log(teacherSelected);
    const aux = teacherSelected.querySelector('.teacher');
    aux.classlist.toggle('teacher--selected');
    teacherSelected.classlist.toggle('teacher--selected');

    const fav = event.currentTarget;
    console.log(fav);

    if (fav.toUpperCase === 'QUITAR'){
        fav.querySelector('.favorite').innerHTML = 'Añadir';
    } 
    else{
        fav.querySelector('.favorite').innerHTML = 'Quitar';
    }
}

teacher1.addEventListener('click',selectTeacher);
teacher2.addEventListener('click',selectTeacher);
teacher3.addEventListener('click',selectTeacher);

fav1.addEventListener('click', selectTeacher);