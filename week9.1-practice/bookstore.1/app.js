//npm init
// npm i --save-dev express mysql
//npm i -g nodemon -->global
// CHECK HERE TERMINAL: console.log('cica');

const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000;

app.use('/static', express.static('static'));

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});

//console.log idekerul, localhost 3000 azt mondja: cannot GET/

// app.get('/', (req, res) => {
//   // res.sendFile(__dirname + '/index.html');
//   res.sendFile(`${__dirname}/index.html`);  
// });

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//browserben check, ha ok: sz0veg

//kell frontend / static JS file + app.use!!

//mysql check
const conn = mysql.createConnection({ //connect 
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo',
  port: 3306,
});

// conn.query('SELECT * FROM author', (err, data) => {
//   if (err) {
//     console.log(err.message);
//     res.status(500).send();
//   } else {
//     console.log(data);
//   }
// });

app.get('/author', (req, res)=>{
  conn.query('SELECT * FROM author', (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'internal server error'
      })  
      return;
    } 
    res.json(data);
  });
});
//test: postman

//15.52

