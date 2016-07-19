"use strict";
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
exports.app = app;
const router = new Router();
router.get('/hi/:user', (ctx, next) => {
    ctx.body = `hi, ${ctx.params.user}`;
});
app.use(router.routes());
//# sourceMappingURL=app.js.map