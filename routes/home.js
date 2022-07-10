const Router = require('koa-router')
const router = new Router()

router.get('/v1/home', (ctx, next) => {
    ctx.body = {
        key: "world v1"
    }
})

module.exports = router