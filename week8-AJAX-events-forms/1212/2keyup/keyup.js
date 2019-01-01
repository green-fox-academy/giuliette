// 1) Subscibe to keyup events on the global window object
// 2) Console log the event object and peek inside
// 3) Display the last pressed key's code as "Last pressed key code is: __"

// // Listen for the event.
// elem.addEventListener('build', function (e) {
//   // e.target matches elem
// }, false);

const globalWindow = document.querySelector('body');
const h1Element = document.querySelector('h1');

globalWindow.addEventListener('keyup', (event) => { //keyup creates the event.
  const keyName = event.keyCode;
  h1Element.innerHTML = `last key pressed: ${keyName}`;
  console.log(event.key)
});