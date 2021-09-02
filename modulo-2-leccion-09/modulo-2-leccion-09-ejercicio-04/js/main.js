'use strict';

const list = document.querySelector('.js_list');
const subtitle = document.querySelector('.js_subtitle');

// const listItem = document.querySelector('.list-item');
// const checkbox = document.querySelector('.check');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

  function writeTasksList (tasks) {
      for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].completed){
            list.innerHTML += ` <div class ="item">
            <li class ="list-item crossed"> ${tasks[index].name} </li>
            <input class="check" type="checkbox" checked>
            </div>`;
        }
        else {
            list.innerHTML += `<div class ="item">
            <li class="list-item"> ${tasks[index].name} </li> 
            <input class="check" type="checkbox" >
            </div>`;
        }
      }      
      const listItem = document.querySelectorAll('.list-item');
      for (const item of listItem) {
        item.addEventListener('click',handleCheckbox);      
      }
  }


  writeTasksList(tasks);

  function crossCompletedTasks (tasks) {
      for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].completed){
            // listItem.classList.add('crossed');        
            list.innerHTML += ` <div class ="item">
            <li class ="list-item crossed"> ${tasks[index].name} </li>
            <input class="check" type="checkbox" checked>
            </div>`;
        }          
      }
  }

  function updateSubtitle(tasks) {
      let completed = 0;
      let pending = 0;
      for (let index = 0; index < tasks.length; index++) {
          if(tasks[index].completed){
              completed++;
          }
          else {
              pending++;
          }          
      }
      subtitle.innerHTML = `Tienes ${ tasks.length} tareas: ${completed} terminadas y ${pending} por terminar`;
  }
  updateSubtitle(tasks);


  function handleCheckbox1 (event) {
      console.log('estoy dentro');
      let clicked = event.target;
      console.log(clicked);
      if (tasks.completed){
        // listItem.classList.add('crossed');  
        // tasks.completed = true;
        clicked.toggleAttribute('checked'); //toggleAttribute add the attribute checked if it is NOT there and takes it out if it IS there
        list.innerHTML += ` <div class ="item">
        <li class ="list-item crossed"> ${tasks.name} </li>
        <input class="check">
        </div>`;
      }
      else{ 
        clicked.toggleAttribute('checked'); 
      }

    updateSubtitle(tasks); //cuando se haya hecho check se actualiza el numero de tareas hechas/por hacer
  }

  function handleCheckbox(event) {
    console.log('estoy dentro');
    let clicked = event.target;
    clicked = event.currentTarget;
    console.log(clicked);
    if(clicked.completed) {
      clicked.completed = 'false';
      // clicked.toggleAttribute('checked'); 
    }
    else {
      clicked.completed = 'true';
    }
    updateSubtitle(tasks); //cuando se haya hecho check se actualiza el numero de tareas hechas/por hacer

  }



  // list.addEventListener('click',handleCheckbox);