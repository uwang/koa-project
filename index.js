require("dotenv").config()
const Koa = require('koa')
const app = new Koa()

const { responseTime } = require('./middleware.js') 

app.use(responseTime);

app.use(async ctx => {
    ctx.body = 'hello'
})

app.listen(process.env.PORT)