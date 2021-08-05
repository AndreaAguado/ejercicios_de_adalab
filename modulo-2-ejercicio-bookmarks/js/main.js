"use strict";

const menuDropdown = document.querySelector(".js_menu_dropdown");

const newData = document.querySelector(".data-actions__add");

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


menuDropdown.classList.add("collapsed");
menuDropdown.classList.remove("collapsed");

newData.classList.remove("hidden");

// urlDest.innerHTML = newUrl.innerHTML;
// checkDest.innerHTML = newCheck.innerHTML;
// descDest.innerHTML = newDesc.innerHTML;
// tagDest.innerHTML = newTag.innerHTML;








