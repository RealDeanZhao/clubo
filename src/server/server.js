import Koa from 'koa';
import Router from 'koa-router';
import fetch from 'isomorphic-fetch';
import bodyParser  from 'koa-bodyparser';
import jwt from 'jsonwebtoken';
import path from "path";

const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const koaJwt = require('koa-jwt');
const Thinky = require('thinky');
const serve = require('koa-static');

import * as M from './models';
import * as R from './repositories';
import {TopicApi, AuthApi} from './api/v1';

const app = new Koa();

if (process.env.NODE_ENV != 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('koa-webpack-dev-middleware');
    const webpackHostMiddleware = require('koa-webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true
    }));

    app.use(webpackHostMiddleware(compiler));
}

const router = new Router();

const topicApi = new TopicApi();
const authApi = new AuthApi();

passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {
    done(null, id)
})

passport.use(new GitHubStrategy({
    clientID: '185813c4f54bbe2c338e',
    clientSecret: '8ed6179a384e4422d38c9afbd48f53040efc9e74',
    callbackURL: "http://localhost:3000/api/v1/auth/github/callback"
}, async (accessToken, tokenSecret, profile, done) => {
    // const _json = profile._json;
    // let githubUser = new M.GithubUserModel({
    //     loginName: _json.login,
    //     name: _json.name,
    //     avatarUrl: _json.avatar_url,
    //     email: _json.email,
    //     url: _json.url,
    //     htmlUrl: _json.html_url,
    //     followerUrl: _json.followers_url,
    //     followingUrl: _json.following_url,
    //     gistsUrl: _json.gists_url,
    //     starredUrl: _json.starred_url,
    //     subscriptionsUrl: _json.subscriptions_url,
    //     organizationsUrl: _json.organizations_url,
    //     reposUrl: _json.repos_url,
    //     eventsUrl: _json.events_url,
    //     receivedEventsUrl: _json.received_events_url,
    //     location: _json.location,
    //     publicRepos: _json.public_repos
    // });
    // const githubUserRepository = new R.GithubUserRepository();
    // githubUser = await githubUserRepository.addOrUpdate(githubUser);
    // const userRepository = new R.LocalUserRepository();
    // let localUser = new M.LocalUserModel({
    //     githubUserId: githubUser.id,
    //     username: githubUser.loginName
    // });
    // localUser = await userRepository.addOrUpdate(localUser);
    console.log('step 2');
    done(null, profile);
}));

app.use(bodyParser());

// router.get('/auth/createLocalUser', async (ctx , next ) => {
//     ctx.redirect('/');
// });

router.post('/api/v1/auth/login', (ctx, next) => {
    console.log(ctx.request.body);

    if (!(ctx.request.body.username === '1' && ctx.request.body.password === '2')) {
        ctx.body = 'Wrong user or password';
        return;
    }
    var profile = {
        username: ctx.request.body.username,
        id: 111
    }
    var token = jwt.sign(profile, 'clubo-jwt-secret', { expiresIn: 60 * 5 });

    ctx.body = token;
});

router.get('/api/v1/topics', koaJwt({
    secret: 'clubo-jwt-secret',
    passthrough: true
}), topicApi.getAll);

router.get('/api/v1/topics/:id/:page?', topicApi.getTopicById);

router.post('/api/v1/auth/local', authApi.auth);

router.get('/api/v1/auth/github', passport.authenticate('github'));

router.get('/api/v1/auth/github/callback',
    async (ctx, next) => {
        return passport.authenticate('github', (user, info, status) => {
            console.log(user);
            ctx.redirect('/');
        })(ctx, next);
    }
);

router.get('/api/v1/auth/haha', async (ctx, next) => {
    console.log('5');
    console.log(ctx);
});

app.use(router.routes());
app.use(passport.initialize());
app.use(serve('.'));


app.listen(3000, () => {
    console.log('server is running');
});
