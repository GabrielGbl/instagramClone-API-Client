const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const multiParty = require('connect-multiparty');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multiParty());

app.use(cors());

app.use(function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

consign()
    .include('./config/dbConnection.js')
    .then('./app/routes')
    .then('./app/controllers')
    .then('./app/models')
    .into(app);

module.exports = app;

