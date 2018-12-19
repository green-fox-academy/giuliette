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

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});