
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./src/mods/db.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const port = 4500;
server.listen(port, function () {
    console.log(`JSON Server is running on port ${port}`)
})