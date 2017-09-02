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
		}		
	});

	return mongoose.model('Postagens', schema);
}