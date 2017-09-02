module.exports = function(application){

    application.get('/', function(req, res){
        res.render('index');
    });

    application.post('/login', function(req, res){
        application.app.controllers.index.login(application, req, res);
    });

    application.post('/cadastro', function(req, res){
        application.app.controllers.index.cadastro(application, req, res);
    });
}