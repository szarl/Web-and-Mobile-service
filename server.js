
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router(require('./src/mods/db.js')());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const corsOptions = {
    origin:'http://localhost:63342',
    credentials:true,
    optionSuccessStatus:200
};

server.use(cors(corsOptions));
const port = 4500;
server.listen(port, function () {
    console.log(`JSON Server is running on port ${port}`)
});