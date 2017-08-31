module.exports = function(application){
	
	application.post('/api', function(req, res){
		application.app.controllers.postagens.inserirPostagem(application, req, res);
	});

	application.get('/api', function(req, res){
		application.app.controllers.postagens.getPostagens(application, req, res);
	});

	application.get('/api/:id', function(req, res){
		application.app.controllers.postagens.getPostagemById(application ,req, res);
	});
	
	application.put('/api/:id', function(req, res){
		application.app.controllers.postagens.atualizarPostagemById(application, req, res);
	});

	application.delete('/api/:id', function(req, res){
		application.app.controllers.postagens.removerPostagemById(application, req, res);
	});
};