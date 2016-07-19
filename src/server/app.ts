import * as Koa from 'koa';
import * as Router from 'koa-router';
import {UserModel} from './models';
import {UserRepository} from './repositories/UserRepository';
var userRepository = new UserRepository();

const Thinky = require('thinky');

const app = new Koa();
const router = new Router();




router.get('/user/:id', async (ctx, next) => {
    var user = await userRepository.getUserById(ctx.params.id);
    var haha = await userRepository.getUsersByNames(['dean', 'xiaozhao']);
    //console.log(user);
    console.log(haha);
    ctx.body = `hi, ${user.id}`;
});

app.use(router.routes());

export {app};