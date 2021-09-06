'use strict';

const madrid = ['https://traverology.media/wp-content/uploads/2019/06/madrid-para-ellas-tvr-1900x1163.jpg', 'https://i.pinimg.com/originals/a8/d9/a6/a8d9a624315393b7d2d7686c21d76553.jpg' , 'https://distritocastellananorte.com/wp-content/uploads/2019/09/madrid-de-los-austrias-plaza-mayor-centro-turismo.jpg'];

const paris = ['https://i.pinimg.com/originals/9f/52/ea/9f52eaf927292b3958827ea20781272b.jpg', 'https://cdn2.civitatis.com/francia/paris/guia/catedral-notre-dame-grid-m.jpg', 'https://www.isango.com/theguidebook/wp-content/uploads/2017/03/header2-3.jpg'];
const ny = ['https://i.pinimg.com/736x/46/35/39/463539dc91b02884dd59cc67da6efb89.jpg' , 'https://www.metalocus.es/sites/default/files/files/metalocus_times-square_new-york_snohetta_09.jpg','https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/241211129_5083682728315524_2945423912376838272_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=TLkM-LjsmdsAX8tY2pN&_nc_ht=scontent-mad1-1.xx&oh=4397068a92d040c98f53c16511fe9079&oe=613BC536'];

const input = document.querySelector('#city');
console.log(input);
console.dir(input);

const img1 = document.querySelector('.js-img-1');
const img2 = document.querySelector('.js-img-2');
const img3 = document.querySelector('.js-img-3');

function handleSelect(ev){
    const selected = ev.target;
    if(selected.value === 'Madrid'){
        img1.src = madrid[0];
        img2.src = madrid[1];
        img3.src = madrid[2];
    }
    else if(selected.value === 'Paris'){
        img1.src = paris[0];
        img2.src = paris[1];
        img3.src = paris[2];
    }
    else if(selected.value === 'New York'){
        img1.src = ny[0];
        img2.src = ny[1];
        img3.src = ny[2];
    }

}

input.addEventListener('change',handleSelect);