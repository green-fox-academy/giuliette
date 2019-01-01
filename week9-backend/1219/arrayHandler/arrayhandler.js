'use strict'

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

//sum
const sum = (par) => {
  let sum = 0;
  for (let i = 0; i < par.length; i++) {
    sum += i;
  }
  return sum;
}

//multiply 
const multiply = (par) => {
  let multinum = 1;
  for (let i = 0; i < par.length; i++){
    multinum *= i;
  }
  return multinum;
}

//double
const doubling = (par) => {
  let array =[];
  for (let i = 0; i < par.length; i++){
    array.push(i*2);
  }
  return array;
}

app.post('/array', (req, res) => {
  const input = req.body.what;
  
  if (input == 'sum') {
      res.json({ 'result': sum(req.body.numbers) });
  } else if (input == 'multiply') {
      res.json({ 'result': multiply(req.body.numbers) });
  } else if (input == 'double') {
      res.json({ 'result': doubling(req.body.numbers) });
  } else {
      res.json({ 'error': 'What should I do with the numbers?' });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});