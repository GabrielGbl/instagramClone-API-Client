const mongoose = require('mongoose');

module.exports = function(){

	const schema = mongoose.Schema({
		texto:{
			type:String,
			required: true
		},
		usuario:{
			type:String,
			required:true
		},
		imagem:{
			type:String,
			required:true
		}
	});

	return mongoose.model('Postagens', schema);
}