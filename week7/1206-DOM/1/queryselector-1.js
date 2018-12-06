'use strict';

const king = document.querySelector('#b325');
console.log(king.textContent);

// 2. store 'The Businessman' and 'The Lamplighter'
//       in the 'businessLamp' variable.
//       console.log each of them.
const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(element => {
  console.log(element.innerHTML);
});
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
const conceited = document.querySelector('.container');
const conceitedKing = conceited.querySelectorAll('.asteroid');
conceitedKing.forEach(element => {alert(element.innerText)});

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(element => {
  console.log(element.innerText);
});