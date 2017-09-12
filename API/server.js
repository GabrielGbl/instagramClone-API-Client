const application = require('./config/express');

const port = process.env.PORT || 8080;
application.listen(port);

console.log('Server rodando na porta: ' + port);

application.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'});
});


