const button = document.querySelector('button');
// console.log(button);

const items = () => {
  let liNum = document.querySelectorAll('li');
  let result = document.querySelector('.result');
  result.innerText = liNum.length;
}

button.addEventListener('click', items);