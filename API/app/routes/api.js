module.exports = function(application){
	
	application.post('/api', function(req, res){
		application.app.controllers.postagens.inserirPostagem(req, res);
	});

	application.get('/api', function(req, res){
		application.app.controllers.postagens.getPostagens(req, res);
	});

	application.get('/api/:id', function(req, res){
		application.app.controllers.postagens.getPostagemById(req, res);
	});
	
	application.put('/api/:id', function(req, res){
		application.app.controllers.postagens.atualizarPostagemById(req, res);
	});
};