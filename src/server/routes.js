import Router from 'koa-router';
const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const jwt = require('jsonwebtoken');

import {TopicApi, AuthApi, ReplyApi, LocalUserApi} from './api/v1';
import {LocalUserRepository} from './repositories';
import log from './utils/log';

const topicApi = new TopicApi();
const authApi = new AuthApi();
const replyApi = new ReplyApi();
const localUserApi = new LocalUserApi();
const router = new Router();

import {isAuthencated} from './middlewares';

export default (app) => {

    router
        .get('/api/v1/topics', topicApi.getAll)
        .get('/api/v1/topics/:id', topicApi.get)
        .post('/api/v1/topics/', topicApi.create)
        .put('/api/v1/topics/:id', isAuthencated, topicApi.update)
        .del('/api/v1/topics/:id', isAuthencated, topicApi.delete);

    router
        .get('/api/v1/topics/:topicId/replies', replyApi.getAll)
        .get('/api/v1/topics/:topicId/replies/:id', replyApi.get)
        .post('/api/v1/topics/:topicId/replies/', replyApi.create)
        .put('/api/v1/topics/:topicId/replies/:id', isAuthencated, replyApi.update)
        .del('/api/v1/topics/:topicId/replies/:id', isAuthencated, replyApi.delete);

    router
        .post('/api/v1/users/', localUserApi.create)
        .put('/api/v1/users/:id', localUserApi.update);

    router.get('/api/v1/auth/github', passport.authenticate('github'));

    router.get('/api/v1/auth', isAuthencated, async function (ctx, next) {
        ctx.response.status = 302;
    });

    router.get('/api/v1/auth/logout', async function (ctx, next) {
        ctx.cookies.set('token', '', { maxAge: -1 });
        ctx.response.status = 200;
    });

    router.get('/api/v1/auth/github/callback',
        async (ctx, next) => {
            return passport.authenticate('github', async (err, user, info, status) => {
                if (user) {
                    log.info('github callback');
                    let token = jwt.sign({ id: user.id }, 'aaaa');

                    const localUserRepository = new LocalUserRepository();
                    const localUser = await localUserRepository.getByGithubId(user.id);

                    ctx.cookies.set('token', token);

                    if (localUser && localUser.active) {
                        ctx.redirect('/');
                    } else {
                        const result = await localUserRepository.create({ githubUserId: user.id });
                        ctx.redirect(`/users/${result.id}`);
                    }
                } else {
                    ctx.redirect('/');
                }
            })(ctx, next);
        }
    );

    app.use(router.routes());
}



