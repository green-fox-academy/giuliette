'use strict'

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
//const bp = require('body-parser');

app.use('/assets', express.static('assets'));
// app.use(bp());
// use body parser, for parsing the body (mostly for post requests)
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const input = req.query.input; //Object shorthand property: const { input } = req.query;
  console.log(typeof input);
  if (input) {
    const resObj = {
      'received': input,
      'result': input * 2
    }
    res.json(resObj);
  } else {
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

app.get('/appenda', (req, res) => {
  const { word } = req.query;
  if (word) {
    const resObj = {
      'appended text': `${word}+a`
    }
    res.json({ resObj });
  }
});

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

// app.get('/dountil/:input', (req, res) => {
//   const input = req.params.input;

//   if (input == 'sum') {
//     res.json({'result': sum(req.body.until});
//   } else {
//     res.json({ 'error': ' numbers needed ' });
//   }
// });

const factorial = (par) => {
  let fac = 1;
  for (let i = par; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

const sum = (par) => {
  let summ = 0;
  for (let i = 0; i <= par; i++) {
    summ += i;
  }
  return summ;
}

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;

  if (action == 'sum') {
    res.json({ 'result': sum(req.body.until) });
  } else if (action == 'factor') {
    res.json({ 'result': factorial(req.body.until) });
  } else {
    res.json('error: please provide input');
  }
});
//TypeError: Cannot read property 'until' of undefined -- body parser!!!

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});