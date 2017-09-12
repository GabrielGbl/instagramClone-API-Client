const mongoose = require('mongoose');

module.exports = function(){

	const schema = mongoose.Schema({
		imagem:{
			type:String,
			required:true
		},
		texto:{
			type:String,
			required: true
		},
		data:{
			type:Date,
			default: Date.now()
		},
		comentarios:{
			id_comentario: Object,
			comentario:String
		}		
	});

	return mongoose.model('Postagens', schema);
}