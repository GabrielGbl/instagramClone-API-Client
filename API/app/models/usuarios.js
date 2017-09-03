const mongoose = require('mongoose');

module.exports = function(){
    const schema = mongoose.Schema({
        nome_completo:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        nome_usuario:{
            type:String,
            required:true
        },
        senha_usuario:{
            type:String,
            required:true
        }
    });

    return mongoose.model("Usuarios", schema);
}