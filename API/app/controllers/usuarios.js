module.exports.inserirUsuario = function(application, req, res){

    const dados = req.body;
    const Usuario = application.app.models.usuarios; 

    const usuario = new Usuario(dados);
    console.log(usuario.nome_usuario);
    Usuario.findOne({nome_usuario:{$eq:usuario.nome_usuario}})
        .exec(function(err, userFound){
            if(err) return res.status(500);
            if(!userFound){
                usuario.save()
                .then(function(result){
                    res.status(200).json(result);
                }, function(err){
                    res.status(500).json(err);
                });
            }else{
                res.status(409).send('Usuário já existe!');
            }
        });    
       
}