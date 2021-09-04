'use strict';

const userInputs = document.querySelectorAll('.js-input');

const page = document.querySelector('.js-body');


function markSelected(){
    //this function checks the current used theme in the radio buttons
    if(page.classList.contains('theme1')){
        userInputs[0].setAttribute('checked','');
        userInputs[1].removeAttribute('checked','');
    }
    else if(page.classList.contains('theme2')){
        userInputs[1].setAttribute('checked','');
        userInputs[0].removeAttribute('checked','');
    }
}
markSelected();

//when the radio buttons is clicked, the theme is changed and the theme value is stored in localStorage:
function handleRadioButtons(event) {
    let selected = event.currentTarget.value;
    changeTheme(selected);
    markSelected();
    saveToLocalStorage(selected);
}

//saveToLocalStorage(input) saves the radio buttons selection by the user
function saveToLocalStorage(input) {
    localStorage.setItem ('selection', input);
}

//getFromLocalStorage() returns the value  
function getFromLocalStorage() {
    const value = localStorage.getItem('selection');
    return value;
}

let selection = getFromLocalStorage('selection'); //if no button is clicked this will be the value used to apply a theme to the page
changeTheme(selection);


//changeTheme receives the selection and after applying conditions sets a theme:
function changeTheme(selected) {
    if(selected === 'daymode'){
        if(page.classList.contains('theme2') && !page.classList.contains('theme1')){
            page.classList.remove('theme2');
            page.classList.add('theme1');
        }
       else if(page.classList.contains('theme2') && page.classList.contains('theme1')){
           page.classList.remove('theme2');
       }
       else if(!page.classList.contains('theme1')){
           page.classList.add('theme1');
       }        
    }
    else if(selected === 'nightmode'){
        if(page.classList.contains('theme1') && !page.classList.contains('theme2')){
            page.classList.remove('theme1');
            page.classList.add('theme2');
        }
       else if(page.classList.contains('theme1') && page.classList.contains('theme2')){
           page.classList.remove('theme1');
       }
       else if(!page.classList.contains('theme2')){
           page.classList.add('theme2');
       } 
    }
    markSelected();
}


for (const input of userInputs) {
    input.addEventListener('click',handleRadioButtons);    
}