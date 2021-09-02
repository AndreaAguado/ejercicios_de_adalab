'use strict';

const input = document.querySelector('.js-input');
const submitButton = document.querySelector('.js-button'); 
const title = document.querySelector('.js-subtitle');

function getURL (){
    let org = input.value;
    let url = 'https://api.github.com/orgs/' + org;
    console.log(url);
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
        const name = document.querySelector('.js-name');
        name.innerHTML = data.login;
        const img = document.querySelector('.js-img');
        img.src = data.avatar_url;
        img.alt = 'Avatar de ' + name.innerHTML;
        const nRepos = document.querySelector('.js-repos');
        nRepos.innerHTML = data.public_repos;
      });
  } 

input.addEventListener('change',getURL);
submitButton.addEventListener('click', getGithubOrg);
submitButton.addEventListener('click',updateTitle);