import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/hi/:user', (ctx, next) => {
    ctx.body = `hi, ${ctx.params.user}`;
});

app.use(router.routes());

export {app};