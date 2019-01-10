'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');

app.use('/assets', express.static('assets'));
app.use('/details/assets', express.static('assets')); //?

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'manage.html'));
});

const conn = mysql.createConnection({
  multipleStatements: true,
  user: 'root',
  password: 'password',
  database: 'quiz',
  port: 3306
});

const randomQuestionNumber = () => {
  let randomNumber = Math.floor((Math.random() * 10) + 1);
  return randomNumber;
}

app.get('/game', (req, res) => {
  let currentQuestion = randomQuestionNumber(); //used multiple times, has to be called just once
  let sqlrandom = `SELECT * FROM questions WHERE id='${currentQuestion}';`;
  conn.query(sqlrandom, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'internal server error'
      });
      return;
    }

    let sql = `SELECT question_id, id, answer,  is_correct FROM answers WHERE question_id='${currentQuestion}';`;
    conn.query(sql, (error, answerData) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({
          error: 'internal server error'
        })
        return;
      }
      res.json({
        id: data[0].id,
        questions: data[0].question,
        answers: answerData
      });
    });
  });
});

app.get('/questions', (req, res) => {
  let sql = 'SELECT * FROM questions;';
  conn.query(sql, (error, data) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'internal server error'
      })
      return;
    }
    res.json(data);
  });
});

app.post('/questions', (req, res) => {
  const { newQuesion, answer1, radio1, answer2, radio2, answer3, radio3, answer4, radio4 } = req.body;
  let sqlinsertQuestion = `INSERT INTO questions (question) VALUES ${newQuesion};`;
  conn.query(sqlinsertQuestion, (error, question) => {
    if (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'internal server error'
      });
      return;
    }
    let sqlInsertAnswers = `INSERT INTO answers (question_id, answer, is_correct) VALUES (${idCounter}, '${answer1}', '${radio1}'), (12, '${answer2}', '${radio2}'), (12, '${answer3}', '${radio3}'), (12, '${answer4}', '${radio4}');`;
    let idCounter = 12;
    conn.query(sqlInsertAnswers, (error, answers) => {
      if (error) {
        console.log(error.message);
        res.status(500).json({
          error: 'internal server error'
        });
        return;
      }
      idCounter++;
      res.json();
    });
  });
});

app.listen(PORT, () => {
  console.log(`app is listening on port 3000`);
});