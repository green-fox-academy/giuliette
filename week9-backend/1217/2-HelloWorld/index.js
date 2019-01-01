// const express = require('express');
// const app = express();
// const PORT = 3000;

// //We use app.set('view engine', 'ejs'); to tell express to use EJS as our templating engine Express will automatically look inside the views/ folder for template files
// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // home page
// app.get('/', (req, res) => {
//   //The res.render() method is used to render the view we pass it and send the HTML to the client
//   // render `home.ejs`
//   res.render('home');
// });


// // start express app on port 3000
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: ` 🌍 Hello World application is up and running. 🎉 We are done. Nice work! 🎉`,
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
