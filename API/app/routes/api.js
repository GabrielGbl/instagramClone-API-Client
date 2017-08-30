module.exports = function(application){
	
	application.post('/api', function(req, res){
		application.app.controllers.postagens.inserirPostagem(application, req, res);
	});

	application.get('/api', function(req, res){
		application.app.controllers.postagens.getPostagens(application, req, res);
	});
		
};