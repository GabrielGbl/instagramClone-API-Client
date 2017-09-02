const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');

module.exports.inserirPostagem = function(application, req, res){	
	const Postagem = application.app.models.postagens;

	res.setHeader("Access-Control-Allow-Origin", "*");
	
	const path_origem = req.files.imagem.path;
	const path_destino = './uploads/' + req.files.imagem.originalFilename;
	const url_imagem = req.files.imagem.originalFilename;

	fs.rename(path_origem, path_destino, function(err){
		if(err){
			return res.status(500).json({error:err});		
		}
	});
	
	const post = new Postagem({imagem: url_imagem ,texto: req.body.texto});

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






