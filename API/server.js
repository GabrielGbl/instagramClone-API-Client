const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 8080;

app.listen(port);

console.log('Server rodando na porta: ' + port);