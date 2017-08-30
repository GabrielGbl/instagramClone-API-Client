module.exports.inserirPostagem = function(application, req, res){	

	const Postagem = application.app.models.postagens;
	const post = new Postagem(req.body);

	post.save()
		.then(function(result){
			console.log('1');
			res.json(result);
		},
		function(err){
			console.log('2');
			res.json(err);
		});
}

module.exports.getPostagens = function(application, req, res){
	
	const Postagem = application.app.models.postagens;
	
	Postagem.find().exec()
		.then(function(result){
			res.json(result);
		},
		function(err){
			res.status(500).json(err);
		});
}
