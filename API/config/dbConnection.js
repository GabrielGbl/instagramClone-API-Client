const mongoose = require('mongoose');

module.exports = function(){
	mongoose.connect('mongodb://localhost:27017/instagram', {
  		useMongoClient: true
	});

	mongoose.connection.on('connected', function(){
		console.log('Mongoose conectado!');
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose desconectado!');
	});

	mongoose.connection.on('error', function(){
		console.log('Erro de conexão!');
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Mongoose desconectado pelo término da aplicação!');
			process.exit(0);
		});
	});
}