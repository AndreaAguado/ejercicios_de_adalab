"use strict";

const menuDropdown = document.querySelector(".js_menu_dropdown");

const newData = document.querySelector(".data-actions__add");

const burger = document.querySelector('.header__menu');

// aquí van las variables que tienen la info ingresada por el usuario
const urlDest = document.querySelector(".data-actions__input");
const checkDest = document.querySelector(".item__seen");
const descDest = document.querySelector(".item__desc");
const tagDest = document.querySelector(".item__tag");

// aquí van las vbles donde se va a guardar dicha info en el listado
const newUrl = document.querySelector(".js_new_dir");
const newCheck = document.querySelector(".js_new_seen");
const newDesc = document.querySelector(".js_new_desc");
const newTag = document.querySelector(".js_new_tags");


// menuDropdown.classList.add("collapsed");
// menuDropdown.classList.remove("collapsed");

newData.classList.remove("hidden");

// urlDest.innerHTML = newUrl.innerHTML;
// checkDest.innerHTML = newCheck.innerHTML;
// descDest.innerHTML = newDesc.innerHTML;
// tagDest.innerHTML = newTag.innerHTML;


// DÍA 3: TABLEVIEW Y LISTVIEW
const dataView = document.querySelector('.js_data_view');

if (dataView.classList.contains('tableview')){
    dataView.classList.remove('tableview');
    dataView.classList.add('listview');
}
else if (dataView.classList.contains('listview')){
    dataView.classList.remove('listview');
    dataView.classList.add('tableview');
}


// 31/08/21 menu collapsed:

function collapseMenu (event){
    event.preventDefault();
    console.log('estoy dentro');
    menuDropdown.classList.toggle('collapsed');
    // if (menuDropdown.classList.contains('collapsed')){
    //     menuDropdown.classList.remove('collapsed');
    // }
    // else{
    //     menuDropdown.classList.add('collapsed');
    // }    
}

burger.addEventListener('click', collapseMenu);




