const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const multiParty = require('connect-multiparty');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(multiParty());

consign()
	.include('./config/dbConnection.js')
	.then('./app/routes')
	.then('./app/controllers')
	.then('./app/models')
	.into(app);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

module.exports = app;

