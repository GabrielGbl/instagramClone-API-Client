const express = require('express');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(expressSession({
    secret:'dasldkasojfpaojrwpoj',
    resave:false,
    saveUninitialized:false
}));

consign()
    .include('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app)

module.exports = app;