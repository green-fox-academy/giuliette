// Click Three Times
// Create a simple HTML document with one button.


// If the user clicks the button 3 times, 
// and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:

// 5 seconds elapsed and clicked 3 times

// If the user starts clicking before the first 5 seconds, nothing should be printed

const div = document.querySelector('div');
const p = document.createElement('p');
div.appendChild(p);

const button = document.querySelector('button');

let counter = 0;

const callback = (event) => {
  if (event.timeStamp <= 5000) {
    button.disabled = true;
  } else if (event.timeStamp > 5000 && counter == 2) {
    setTimeout(() => {
      p.innerText = '5s elapsed & 3 clicks';
    }, 5000);
  }
  counter++;
}

button.addEventListener('click', callback);

