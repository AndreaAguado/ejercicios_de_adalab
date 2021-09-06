'use strict';

const select = document.querySelector('#data');
console.log(select);

const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
console.log(option1);

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
    let newContent;
    for (let i = 0; i < personalData.length; i++) {
        if(i===0){
            newContent = document.createTextNode(personalData[0].firstName);
            console.log(newContent);
            option1.appendChild(newContent);
            option1.setAttribute('value', newContent);
            select.appendChild(option1);
        }
        else if(i===1){
            newContent = document.createTextNode(personalData[1].firstName);
            option2.appendChild(newContent);
            option2.value=newContent;
            select.appendChild(option2);
        }
        else if(i===2){
            newContent = document.createTextNode(personalData[2].firstName);
            option3.appendChild(newContent);
            option3.value=newContent;
            select.appendChild(option3);
        } 
        
    }
}

fillOptions();

function fillForm(ev){


}