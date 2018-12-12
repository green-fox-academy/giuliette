const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log(event.timeStamp);
  button.disabled = true;
})

const removeEventListener = document.querySelector

// const listener = () => {
//   console.log(Date.now());
//   button.removeEventListener('click', listener);
// }

// button.addEventListener('click', listener);