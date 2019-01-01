'use strict'

const mysql = require('mysql');
const express = require('express'); // Express module import // fuggveny meghivasa
const app = express();
const path = require('path'); // szinten express!
const PORT = 3000;

app.use(express.json()); //endpointhoz express json fuggvenyet hivjuk
app.use(express.static(__dirname));

const conn = mysql.createConnection({ //connect 
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
});

//fooldal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
}); 

app.get('/book', (req, res) => {
  //inside otherwise global!!!!!!!!!!!!!!
  let sqlSearch = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast, author, category, publisher WHERE book_mast.cate_id = category.cate_id 
  AND book_mast.pub_id = publisher.pub_id AND book_mast.aut_id = author.aut_id`;

  // const sciencebooks = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  // FROM book_mast, author, category, publisher 
  // WHERE book_mast.cate_id = category.cate_id 
  // AND book_mast.pub_id = publisher.pub_id 
  // AND book_mast.aut_id = author.aut_id
  // AND cate_descrip = 'Science';`;
  
  //req.query.category - ha ifbe & letezik: query.string elotti vegpont key+value parok = itt kapjuk be az erteket!

  //query kereses alapjan SQL kereses ...majd azt betolteni a connectionbe.
  //ha letezik ilyen query key 
  // if (req.query.price){

  // }
  if (req.query.category) {  
    sqlSearch = sqlSearch + ` AND cate_descrip = "${req.query.category}"`;
  }
  if (req.query.author){
    sqlSearch = sqlSearch + ` AND aut_id = "${req.query.category}"`;
  }
  if (req.query.price){
    sqlSearch = sqlSearch + ` AND book_price = "${req.query.category}"`
  }
  if (req.query.publisher){
    sqlSearch = sqlSearch + ` AND pub_id = "${req.query.category}"`
  }


  sqlSearch = sqlSearch + `;`;
  //database query
  conn.query(sqlSearch, (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    res.json(row);
  });
});

// app.get('/author', (req, res) => {
//   //database query
//   const test = 'SELECT * FROM author;';
//   conn.query(test, (err, row) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//       return;
//     }
//     res.json(row);
//   });
// });

// //query param v. body
// app.get('/addauthor', (req, res) => {
//   const test2 = `INSERT INTO author (aut_id, aut_name, country, home_city) VALUES ("AUT984","${req.query.name}", "${req.query.country}", "${req.query.city}");`;
//   conn.query(test2, (err, row) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//       return;
//     }
//     res.json(row);
//   });
// });
// //body
// app.post('/addauthor', (req, res) => {
//   const test2 = `INSERT INTO author (aut_id, aut_name, country, home_city) VALUES ("AUT934", ${req.body.name}, ${req.body.country}, ${req.body.city});`;
//   const reqBody = req.body;
//   console.log(reqBody);

//   conn.query(test2, (err, row) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//       return;
//     }
//     res.json(row);
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get('/books', (request, response) => {
  conn.query(getAllInfos, (err, data) => {
    if (err) {
      response.status(500).send(err);
    }
    response.status(200).send(data);
  });
});

