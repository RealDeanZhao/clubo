import Koa from 'koa';
import fetch from 'isomorphic-fetch';
import bodyParser  from 'koa-bodyparser';
import jwt from 'jsonwebtoken';
import path from "path";
import thunkMiddleware from 'redux-thunk';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {match, RouterContext, Router, IndexRoute, Route} from 'react-router';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {renderToString} from 'react-dom/server';
import createHistory from 'react-router/lib/createMemoryHistory';
import history from 'history';
// ...
const RF = require('redux-form');
const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const koaJwt = require('koa-jwt');
const Thinky = require('thinky');
const serve = require('koa-static');


import * as M from './models';
import * as R from './repositories';
import {TopicApi, AuthApi} from './api/v1';
import koaRoutes from './routes';
import * as Reducers from '../client/react/reducers';
import reactRoutes from '../client/react/routes';

const app = new Koa();

const initialState = {};
const enhancer = compose(
    applyMiddleware(thunkMiddleware)
);
const store = createStore(
    combineReducers({
        topicList: Reducers.topicList,
        topicDetail: Reducers.topicDetail,
        topicDraft: Reducers.topicDraft,
        replyList: Reducers.replyList,
        showSignInModal: Reducers.showSignInModal,
        showCluboEditorModal: Reducers.showCluboEditorModal,
        authencated: Reducers.authencated,
        routing: routerReducer,
        form: RF.reducer
    }), initialState, enhancer);

if (process.env.NODE_ENV != 'production') {
    console.log('init webpack hot');
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('koa-webpack-dev-middleware');
    const webpackHostMiddleware = require('koa-webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(webpackHostMiddleware(compiler));
}

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
    console.log('passport use');
    done(null, profile);
}));

app.use(bodyParser());

koaRoutes(app);

app.use(passport.initialize());

app.use(serve('.'));

app.use((ctx, next) => {
    const history = createHistory(ctx.request.url);
    console.log(ctx.request.url);
    //const location = history.createLocation(ctx.request.url);
    //console.log(history);
    match({ routes: reactRoutes, location: ctx.request.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log('500');
            //res.status(500).send(error.message);
        } else if (redirectLocation) {
            console.log('302');
            ctx.response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            console.log('200');
            if (process.env.NODE_ENV != 'production') {
                global.webpackIsomorphicTools.refresh();
            }
            const serverRender = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider >
            );
            ctx.response.set('content-type', 'text/html');
            ctx.response.status = 200;
            ctx.response.body =
                `<!doctype html>
<html lang="en" data-framework="typescript">
  <head>
    <meta charset="utf-8">
    <title>Clubo</title>
  </head>
  <body>
    <div id='app'> ${serverRender}</div>

    <script src="/bundle.js"></script>
  </body>
</html>
            `;
        } else {

        }
    });
});
    // <script src="./node_modules/react/dist/react.js"></script>
    // <script src="./node_modules/react-dom/dist/react-dom.js"></script>
app.listen(3000, () => {
    console.log('server is running');
});
