// Clicking the ‘Create candies’ button gives you 1 candy.
let candyCount = 0;
const createCandy = document.querySelector('.create-candies');
const candyNum = document.querySelector('.candies');
let createCandy = () => {
  candyCount++; 
  candyNum.innerText = `${candyCount}`;
}

createCandy.addEventListener('click', createCandy);

// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
let lollyPopCounter = 0;
const buyLollypops = document.querySelector('.buy-lollypops');
const lollypop = document.querySelector('.lollypops');
const exchangeRate = document.querySelector('.speed');

let buyLollipops = ('click', event => {
  if (candyCount >= 10) {
    candyCount -= 10;
    lollyPopCounter++;
    lollypop.innerText += `🍭`;
  }
}

