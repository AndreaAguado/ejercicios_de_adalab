'use strict';

const input = document.querySelector('.js-input');
const submitButton = document.querySelector('.js-button'); 
const title = document.querySelector('.js-subtitle');

function getURL (){
    let org = input.value;
    let url = 'https://api.github.com/orgs/' + org;
    return url;
}

function updateTitle(){
  let org = input.value;
  title.innerHTML = 'Mostrando todos los repositorios de: ' + org;
}

function getGithubOrg() {
    let url = getURL();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        return fetch('https://api.github.com/orgs/Adalab/repos');
      })
      .then(reposResponse => reposResponse.json())
      .then(reposName => {
        const namesList = document.querySelector('.js-list');
        console.log(reposName);
        for (const item of reposName) {
          namesList.innerHTML += `<li class="list-item">${item.name}</li>`;
        }
      })
  } 

input.addEventListener('change',getURL);
submitButton.addEventListener('click', getGithubOrg);
submitButton.addEventListener('click',updateTitle);