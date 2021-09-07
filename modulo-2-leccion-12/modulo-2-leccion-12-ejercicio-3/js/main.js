'use strict';

const select = document.querySelector('#data');
console.log(select);

const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');

const input = document.querySelectorAll('.js-input');

const personalData = [
    { firstName: 'Mikasa',
    lastName: 'Ackerman' ,
    phone: '000111222'
    },
    { firstName: 'Armin',
    lastName: 'Arlert' ,
    phone: '999888000'
    },
    { firstName: 'Eren',
    lastName: 'Jaeger' ,
    phone: '99777888'
    }
]
console.log(personalData);

function fillOptions(){
    // let newContent;
    for (let i = 0; i < personalData.length; i++) {
        if(i===0){
            const newContent1 = document.createTextNode(personalData[0].firstName);
            // console.log(newContent1);
            // option1.value = newContent1;
            option1.appendChild(newContent1);
            option1.setAttribute('value', personalData[0].firstName);
            select.appendChild(option1);
        }
        else if(i===1){
            const newContent2 = document.createTextNode(personalData[1].firstName);
            console.log(typeof newContent2);
            // option2.value = newContent2;
            option2.appendChild(newContent2);            
            option2.setAttribute('value', personalData[1].firstName);
            select.appendChild(option2);
        }
        else if(i===2){
            const newContent3 = document.createTextNode(personalData[2].firstName);
            // console.log(newContent3);
            option3.appendChild(newContent3);
            // option3.value=newContent3;
            option3.setAttribute('value', personalData[2].firstName);
            select.appendChild(option3);
        } 
        
    }
}

fillOptions();

function fillForm(ev){
    console.log('aqui');
    const selected = ev.target;
    console.log(selected);
    console.dir(selected);
   
    if(selected.value === personalData[0].firstName ){
        input[0].value = personalData[0].firstName;
        input[1].value = personalData[0].lastName;
        input[2].value = personalData[0].phone;
    }  
    else if(selected.value === personalData[1].firstName ){
        input[0].value = personalData[1].firstName;
        input[1].value = personalData[1].lastName;
        input[2].value = personalData[1].phone;
    } 
    else if(selected.value === personalData[2].firstName ){
        input[0].value = personalData[2].firstName;
        input[1].value = personalData[2].lastName;
        input[2].value = personalData[2].phone;
    } 
    
}

select.addEventListener('change',fillForm);
option1.addEventListener('change',fillForm);
option2.addEventListener('change',fillForm);
option3.addEventListener('change',fillForm);