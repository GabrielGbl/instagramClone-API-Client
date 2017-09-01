const express = require('express');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.set(express.static('.app/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(expressValidator());

app.use(expressSession({
    secret:'',
    resave:false,
    saveUninitialized:false
}));

consign()
    .include('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app)

module.exports = app;