'use strict';

function randomSecret() {
  const getDigit = () =>
    Math.floor(Math.random() * 10);
  return Array.from({length: 4}, getDigit).join('');
}

console.log(randomSecret());