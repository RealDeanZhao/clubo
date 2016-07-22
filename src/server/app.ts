import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as fetch from 'isomorphic-fetch';
import * as bodyParser  from 'koa-bodyparser';
import * as jwt from 'jsonwebtoken';
import {resolve} from "path";

const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const koaJwt = require('koa-jwt');
const Thinky = require('thinky');
const statics = require('koa-static');

import * as M from './models';
import * as R from './repositories';
import * as A from './api/v1';


const app = new Koa();
const router = new Router();

const topicApi = new A.TopicApi();

passport.serializeUser(function (user: any, done: any) {
    done(null, user.id)
})

passport.deserializeUser(function (id: any, done: any) {
    done(null, id)
})

passport.use(new GitHubStrategy({
    clientID: '185813c4f54bbe2c338e',
    clientSecret: '8ed6179a384e4422d38c9afbd48f53040efc9e74',
    callbackURL: "http://localhost:3000/auth/github/callback"
}, async (accessToken: any, tokenSecret: any, profile: any, done: any) => {
    const _json = profile._json;
    let githubUser = new M.GithubUserModel({
        loginName: _json.login,
        name: _json.name,
        avatarUrl: _json.avatar_url,
        email: _json.email,
        url: _json.url,
        htmlUrl: _json.html_url,
        followerUrl: _json.followers_url,
        followingUrl: _json.following_url,
        gistsUrl: _json.gists_url,
        starredUrl: _json.starred_url,
        subscriptionsUrl: _json.subscriptions_url,
        organizationsUrl: _json.organizations_url,
        reposUrl: _json.repos_url,
        eventsUrl: _json.events_url,
        receivedEventsUrl: _json.received_events_url,
        location: _json.location,
        publicRepos: _json.public_repos
    });
    const githubUserRepository = new R.GithubUserRepository();
    githubUser = await githubUserRepository.addOrUpdate(githubUser);
    const userRepository = new R.LocalUserRepository();
    let localUser = new M.LocalUserModel({
        githubUserId: githubUser.id,
        userName: githubUser.loginName
    });
    localUser = await userRepository.addOrUpdate(localUser);
    done(null, profile);
}));

app.use(bodyParser());

router.post('/auth/login', (ctx: any, next: any) => {
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

router.get('/api/v1/topics/:page?', koaJwt({
    secret: 'clubo-jwt-secret',
    passthrough: true
}), topicApi.getAll);

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
    passport.authenticate('github', { successRedirect: '/', failureRedirect: '/api/v1/topics' })
);

app.use(router.routes());

app.use(passport.initialize());

app.use(statics('.'));

export {app};