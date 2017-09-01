const application = require('./config/express');

const port = process.env.port || 3000;
application.listen(port);

console.log('Client rodando na porta ' + port);