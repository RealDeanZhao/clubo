import * as Koa from 'koa';
import * as Router from 'koa-router';
import {User} from './models'

const Thinky = require('thinky');

const app = new Koa();
const router = new Router();
 



router.get('/hi/:user', (ctx, next) => {
    let user = new User({
        name: 'Dean Zhao',
        loginName: 'xiaozhao'
    });
     

    user.saveAll().then(function (result: any) {

    });
    ctx.body = `hi, ${ctx.params.user}`;
});

app.use(router.routes());

export {app};