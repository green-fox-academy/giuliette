// Clicking the ‘Create candies’ button gives you 1 candy.
const buttonCreateCandies = document.querySelector('.create-candies');
const candiesNumber = document.querySelector('.candies');

let number = 0;

let callbackCreateCandy = () => {
  number++; 
  candiesNumber.innerText = `${number}`;
}

buttonCreateCandies.addEventListener('click', callbackCreateCandy);