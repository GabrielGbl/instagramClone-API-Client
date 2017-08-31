const ObjectID = require('mongodb').ObjectID;

module.exports.inserirPostagem = function(application, req, res){	

	const Postagem = application.app.models.postagens;
	const post = new Postagem(req.body);

	post.save()
		.then(function(result){
			res.json(result);
		},
		function(err){			
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
			res.json(err);
		});
}

module.exports.getPostagemById = function(application, req, res){

	const Postagem = application.app.models.postagens;
	const _id = req.params.id;
	Postagem.find(ObjectID(_id)).exec()
		.then(function(result){
			res.json(result);
		},
		function(err){
			res.json(err);
		});	

}






