'use strict'

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) => {
  const input = req.query.input; //Object shorthand property: const { input } = req.query;
  if (input) {
    const resObj = {
      'received': input,
      'result': input * 2
    }
    res.json(resObj);
  } else if (input = NaN) {
    res.json({ 'error': 'please provide a number input' });
  }
  else {
    res.json({ 'error': 'please provide an input' });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;
  if (name && title) {  
    const resObj = {
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    }
    res.json(resObj);
  } else {
    res.json({ 'error': 'input needed' })
  }
});

// app.get('/appenda', (req, res) => {
//   const {word} = req.query;
//   if (word){
//     const resObj = {
//       'appended text': `${word}+a`
//     }
//     res.json({resObj});
//   } 
// });

// app.get('/appenda/:input', (req, res) => {
//   const {word} = req.params;
//   if (word){
//     const resObj = {
//       'appended text': `${word}+a`
//     }
//     res.json({resObj});
//   } else {
//     res.json({'error': '404'})
//   }
// });

app.get('/appenda/:input', (req, res) => {
  const input = req.params.input;
  if (input) {
    const resObject = {
      'appended': input + 'a'
    }
    res.json(resObject);
  } else {
    res.json({ 'error': '404' });
  }
 });

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});