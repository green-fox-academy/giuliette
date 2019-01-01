'use strict';

var animal = document.querySelector('.animals')
var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(element => {
  element.innerText = animal.innerText;
});
paragraphs.forEach(element => {
  element.innerHTML = animal.innerHTML;
});