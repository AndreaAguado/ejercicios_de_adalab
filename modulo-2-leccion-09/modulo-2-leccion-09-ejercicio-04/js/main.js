'use strict';

const list = document.querySelector('.js_list');
const subtitle = document.querySelector('.js_subtitle');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

  function writeTasks (tasks) {
      for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].completed){
            list.innerHTML += `<li class = crossed> ${tasks[index].name} </li>`;
        }
        else {
            list.innerHTML += `<li> ${tasks[index].name} </li>`;
        }
      }
      
  }

  writeTasks(tasks);

  function updateSubtitle(tasks) {
      subtitle.innerHTML = `Tienes ${ tasks.length} tareas: Y terminadas y Z por terminar`;
  }

  updateSubtitle(tasks);