'use strict'

// dotenv module
require('dotenv').config();
// MySQL module
const mysql = require('mysql');
// Express module
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// CONFIGURATION
// const conn = mysql.createConnection({
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD
// });

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'bookinfo',
    user: 'root',
    password: 'password'
  });

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'books.html'));
});

conn.connect(err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('connected to database', '\n');
});

const getAllBooks = 'SELECT book_name FROM book_mast'

app.get('/', (request, response) => {
  conn.query(getAllBooks, (err, data) => {
    if (err) {
      response.status(500).send(err);
    }
    //console.log(data);
    response.status(200).send(data);
  });
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));


