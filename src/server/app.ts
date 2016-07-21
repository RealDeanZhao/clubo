import * as Koa from 'koa';
import * as Router from 'koa-router';
import {resolve} from "path";
import {UserModel} from './models';
import {UserRepository} from './repositories/UserRepository';
import {TopicRepository} from './repositories/TopicRepository';
import {TopicApi} from './api/v1/TopicApi';
var userRepository = new UserRepository();
var topicRepository = new TopicRepository();
var topicApi = new TopicApi();

const Thinky = require('thinky');

const app = new Koa();
const router = new Router();
const statics = require('koa-static');



router.get('/user/:id', async (ctx, next) => {
    var user = await userRepository.getUserById(ctx.params.id);
    var haha = await userRepository.getUsersByNames(['dean', 'xiaozhao']);
    //console.log(user);
    console.log(haha);
    ctx.body = `hi, ${user.id}`;
});

router.get('/api/v1/topics/:page?', topicApi.getAll);

app.use(statics('.'));
console.log(__dirname);
app.use(router.routes());

export {app};