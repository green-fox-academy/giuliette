'use strict'

let newContent = ['apple', 'banana', 'cat', 'dog'];
let content = document.querySelectorAll('li');
content.forEach((element, index) => {
  element.textContent = newContent[index];
});
console.log(content);

let limegreen = document.querySelector('ul');
limegreen.classList.add('limegreen');