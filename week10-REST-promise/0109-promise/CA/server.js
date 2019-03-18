'use strict';

const express = require('express');

const app = express();
app.use(express.static('static'));
app.use(express.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aliaser',
  password: 'password',
  database: 'alias'
});

function randomSecret() {
  const getDigit = () =>
    Math.floor(Math.random() * 10);
  return Array.from({length: 4}, getDigit).join('');
}

app.post('/api/links', (req, res) => {
  const alias = {
    alias: req.body.alias,
    url: req.body.url,
    secret: randomSecret(),
    hit_count: 0
  };
  connection.query('INSERT INTO aliases SET ?', alias, (error, results, fields) => {
    if (error) {
      res.status(400).json({message: "Ajjajj"});
      return;
    }
    res.json({
      alias: req.body.alias,
      url: req.body.url,
      secret: randomSecret(),
      hit_count: 0,
      id: results.insertId
    });
  });
});

app.get('/a/:alias', (req, res) => {
  const alias = req.params.alias;
  connection.query('SELECT hit_count, url FROM aliases WHERE alias = ?', alias, (error, results) => {
    if (error) {
      res.status(500).json({message: 'nagy ajjajj'});
      return;
    }
    const resultAlias = results[0];
    connection.query('UPDATE aliases SET hit_count = ? WHERE alias = ?', [resultAlias.hit_count + 1, alias], (e) => {
      if (e) {
        res.status(500).json({message: 'nagy ajjajj'});
        return;
      }
    });
    res.redirect(resultAlias.url);
  });
});

app.listen(8080, () => {
  console.log(`app is listening on port: 8080`);
});
