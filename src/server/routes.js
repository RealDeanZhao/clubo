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
import config from '../config';

export default (app) => {
    log.debug('initialize routes');
    router
        .get(config.server.topic.getAll, topicApi.getAll)
        .get(config.server.topic.get, topicApi.get)
        .post(config.server.topic.create, topicApi.create)
        .put(config.server.topic.update, isAuthencated, topicApi.update)
        .del(config.server.topic.delete, isAuthencated, topicApi.delete);

    router
        .get(config.server.reply.getAll, replyApi.getAll)
        .get(config.server.reply.get, replyApi.get)
        .post(config.server.reply.create, replyApi.create)
        .put(config.server.reply.update, isAuthencated, replyApi.update)
        .del(config.server.reply.delete, isAuthencated, replyApi.delete);

    router
        .post(config.server.localUser.create, localUserApi.create)
        .put(config.server.localUser.update, localUserApi.update);

    router.get(config.server.auth.github, passport.authenticate('github'));

    router.get(config.server.auth.base, isAuthencated, async function (ctx, next) {
        ctx.response.status = 302;
    });

    router.get(config.server.auth.logout, async function (ctx, next) {
        ctx.cookies.set('token', '', { maxAge: -1 });
        ctx.response.status = 200;
    });

    router.get(config.server.auth.githubCallback,
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
                        ctx.redirect(`${config.server.localUser.base}/${result.id}`);
                    }
                } else {
                    ctx.redirect('/');
                }
            })(ctx, next);
        }
    );

    app.use(router.routes());
}
