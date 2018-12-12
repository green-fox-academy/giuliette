// Delayed Click
// Create a simple HTML document with one button.
//  If the user clicks the button it should wait 2 
//  seconds and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const div = document.querySelector('div');
const p = document.createElement('p');

const timeoutText = () => {
  setTimeout(() => {
    p.innerText = '2s elapsed';
  }, 2000);
}

div.appendChild(p);
button.addEventListener('click', timeoutText);