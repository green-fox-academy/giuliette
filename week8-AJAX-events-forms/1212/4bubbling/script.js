
//   Here is an image inspector, but the buttons are not implemented yet, that will
//   be your task!
//    - the nav buttons (up, down, left, right) move the background by 10px
//    - the zoom buttons increase/decrease the image by 20%
//    - attach only two event listeners to the nav element
//      - one for navigation
//      - one for zooming

const buttons = document.querySelector('nav');
const image = document.querySelector('.img-inspector')

let xPos = 0;
let yPos = 0;
let size = 200;

buttons.addEventListener('click', event => {
  if (event.target.dataset.direction === 'in') {
    size += 10;
    image.style.backgroundSize = `${size}%`;
  } else if (event.target.dataset.direction === 'out') {
    size -= 10;
    image.style.backgroundSize = `${size}%`;
  } 
  if (event.target.dataset.direction === 'left') {
    xPos += 10;
    image.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (event.target.dataset.direction === 'right') {
    xPos -= 10;
    image.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (event.target.dataset.direction === 'up') {
    yPos -= 10;
    image.style.backgroundPosition = `${xPos}px ${yPos}px`;
  } else if (event.target.dataset.direction === 'down') {
    yPos += 10;
    image.style.backgroundPosition = `${xPos}px ${yPos}px`; 
  }
});