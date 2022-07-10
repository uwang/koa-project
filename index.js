require("dotenv").config()
const Koa = require('koa')
const app = new Koa()


const { responseTime } = require('./middleware.js')
app.use(responseTime)

const home = require('./routes/home.js')
const user = require('./routes/user.js')

app.use(home.routes())
app.use(user.routes())

app.listen(process.env.PORT, () => console.log(`server started ${process.env.PORT}`))