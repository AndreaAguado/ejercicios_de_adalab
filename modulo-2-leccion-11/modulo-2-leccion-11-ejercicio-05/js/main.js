'use strict';

const userInputs = document.querySelectorAll('.js-input');

const page = document.querySelector('.js-body');

function markSelected(){
    //this function checks the current used theme in the radio buttons
    if(page.classList.contains('theme1')){
        userInputs[0].toggleAttribute('checked');
    }
    else if(page.classList.contains('theme2')){
        userInputs[1].toggleAttribute('checked');
    }
}
markSelected();

function handleRadioButtons(event) {
    const selected = event.currentTarget;
    if(selected.value === 'daymode'){
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
    else if(selected.value === 'nightmode'){
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
}

for (const input of userInputs) {
    input.addEventListener('click',handleRadioButtons);    
}