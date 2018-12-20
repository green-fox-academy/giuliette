'use strict'

const mysql = require('mysql');

// Express module import // fuggveny meghivasa
const express = require('express');
const app = express();
// szinten express!
const path = require('path');
const PORT = 3000;

//endpointhoz express json fuggvenyet hivjuk
app.use(express.json());

//connect 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
});



//database query
const test = 'SELECT * FROM author;';
conn.query(test, (err, row) => {
  if (err) {
    console.log(err);
    res.status(500).send(err);
    return;
  }
  console.log(row);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

