const Koa = require('koa')
const serve = require('koa-static')

const server = new Koa()

server.use(serve('client'))

server.listen(8080)
