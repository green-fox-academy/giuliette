const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (message) {
    const resObject = {
      "received": message,
      "translated": "I am Groot!"
    }
    res.status(200).json(resObject);
  } else {
    res.status(210).json({
      "error": "I am Groot!"
    });
  }
});

module.exports = app;