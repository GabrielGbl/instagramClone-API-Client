const ObjectID = require('mongodb').ObjectID;

module.exports.inserirPostagem = function(application, req, res){	

	const Postagem = application.app.models.postagens;
	const post = new Postagem(req.body);

	post.save()
		.then(function(result){
			res.status(200).json(result);
		},
		function(err){			
			res.status(400).json(err);
		});
}

module.exports.getPostagens = function(application, req, res){
	
	const Postagem = application.app.models.postagens;
	
	Postagem.find().exec()
		.then(function(result){
			res.status(200).json(result);
		},
		function(err){
			res.status(500).json(err);
		});
}

module.exports.getPostagemById = function(application, req, res){

	const Postagem = application.app.models.postagens;
	const _id = req.params.id;
	Postagem.find(ObjectID(_id)).exec()
		.then(function(result){
			res.status(200).json(result);
		},
		function(err){
			res.status(400).json(err);
		});	

}

module.exports.atualizarPostagemById = function(application, req, res){
	
		const Postagem = application.app.models.postagens;
		const _id = req.params.id;
		const dados = req.body;
		
		Postagem.findByIdAndUpdate(ObjectID(_id), dados).exec()
			.then(function(result){
				res.status(200).json();
			}, function(err){
				res.status(400).json(err);
			});
}


module.exports.removerPostagemById = function(application, req, res){
	
		const Postagem = application.app.models.postagens;
		const _id = req.params.id;
		
		Postagem.findByIdAndRemove(ObjectID(_id)).exec()
		.then(function(result){
			res.status(200).json();
		}, function(err){
			res.status(400).json(err);
		});
}






