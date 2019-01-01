'use strict';
// Write the image's url to the console.
const url = document.querySelector('img');
console.log(url.src);

// Replace the image with a picture of your favorite animal.
url.setAttribute('src', 'https://i.pinimg.com/originals/3e/1c/27/3e1c2759f9f7922895cc60e23a2704cf.jpg')

// Make the link point to the Green Fox Academy website.
const link = document.querySelector('a');
link.setAttribute('href','https://www.greenfoxacademy.com/');

 // Disable the second button.
const button = document.querySelector('.this-one');
button.disabled = true;

  // Replace its text with 'Don't click me!'.
  button.innerHTML = 'don\'t click me!';


