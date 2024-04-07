const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static("public"), bodyParser.urlencoded({extended: true}), (req, res , next) => {
  const clientIP = req.ip;
  console.log(`Client IP: ${clientIP}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/home', (req, res) => {
  res.render('home', {foo: 'FOO'});
});

app.get('/bravimotor', (req, res) => {
  res.render('home', {foo: 'FOO'});
});

app.get('/matrixcalulator', (req, res) => {
  res.render('home', {foo: 'FOO'});
});

app.get('/secretkeeper', (req, res) => {
  res.render('home', {foo: 'FOO'});
});

app.get('/todo', (req, res) => {
  res.render('home', {foo: 'FOO'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});