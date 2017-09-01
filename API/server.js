const application = require('./config/express');

const port = process.env.PORT || 8080;
application.listen(port);

console.log('Server rodando na porta: ' + port);


