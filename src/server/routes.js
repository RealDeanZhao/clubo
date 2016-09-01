import Router from 'koa-router';
const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const jwt = require('jsonwebtoken');

import {TopicApi, AuthApi, ReplyApi} from './api/v1';
const topicApi = new TopicApi();
const authApi = new AuthApi();
const replyApi = new ReplyApi();
const router = new Router();

import {auth} from '../client/react/modules/auth';
import {isAuthencated} from './middlewares';

export default (app, store) => {

    router
        .get('/api/v1/topics', topicApi.getAll)
        .get('/api/v1/topics/:id', topicApi.get)
        .post('/api/v1/topics/', isAuthencated, topicApi.create)
        .put('/api/v1/topics/:id', isAuthencated, topicApi.update)
        .del('/api/v1/topics/:id', isAuthencated, topicApi.delete);

    router
        .get('/api/v1/topics/:topicId/replies', replyApi.getAll)
        .get('/api/v1/topics/:topicId/replies/:id', replyApi.get)
        .post('/api/v1/topics/:topicId/replies/', isAuthencated, replyApi.create)
        .put('/api/v1/topics/:topicId/replies/:id', isAuthencated, replyApi.update)
        .del('/api/v1/topics/:topicId/replies/:id', isAuthencated, replyApi.delete);

    router.get('/api/v1/auth/github', passport.authenticate('github'));

    router.get('/api/v1/auth', isAuthencated, async function(ctx, next) {
        ctx.response.status = 302;
    });

    router.get('/api/v1/auth/github/callback',
        async (ctx, next) => {
            return passport.authenticate('github', (err, user, info, status) => {
                if (user) {
                    console.log('github callback');
                    let token = jwt.sign({ id: user.id }, 'aaaa');
                    store.dispatch(auth(user, user, token));
                    ctx.redirect('/');
                } else {
                    ctx.redirect('/');
                }
                //next();
            })(ctx, next);
        }
    );

   

    app.use(router.routes());
}



