import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as fetch from 'isomorphic-fetch';
var passport = require('koa-passport');
var GitHubStrategy = require('passport-github2');

import {resolve} from "path";
import * as M from './models';
import * as R from './repositories';
import * as A from './api/v1';

var userRepository = new R.LocalUserRepository();
var topicRepository = new R.TopicRepository();
var topicApi = new A.TopicApi();

const Thinky = require('thinky');

const app = new Koa();
const router = new Router();
const statics = require('koa-static');

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

router.get('/', (ctx, next) => {
    console.log('1');
});
router.get('/user/:id', async (ctx, next) => {
    var user = await userRepository.getUserById(ctx.params.id);
    var haha = await userRepository.getUsersByNames(['dean', 'xiaozhao']);
    ctx.body = `hi, ${user.id}`;
});

router.get('/api/v1/topics/:page?', topicApi.getAll);

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback',
    passport.authenticate('github', { successRedirect: '/', failureRedirect: '/api/v1/topics' })
);

router.get('/logout', async (ctx: any, next: any) => {

});
app.use(passport.initialize());

app.use(statics('.'));
app.use(router.routes());

export {app};