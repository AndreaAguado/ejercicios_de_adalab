'use strict';

const myContent = document.querySelector('div');

// const content = '<h1>lorem ipsum</h1> <img src="http://via.placeholder.com/350x150"></img> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

const title = '<h1>lorem ipsum</h1>';
const img = '<img src="http://via.placeholder.com/350x150"></img>';
const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

myContent.innerHTML = myContent.innerHTML + title;
myContent.innerHTML = myContent.innerHTML + img;
myContent.innerHTML = myContent.innerHTML + paragraph;

// myContent.innerHTML = myContent.innerHTML + content;