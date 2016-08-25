import Koa from 'koa';
import bodyParser  from 'koa-bodyparser';
import jwt from 'jsonwebtoken';
import path from "path";
import serialize from 'serialize-javascript';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {match, RouterContext, Router, IndexRoute, Route} from 'react-router';
import {renderToString} from 'react-dom/server';
import createHistory from 'react-router/lib/createMemoryHistory';

const passport = require('koa-passport');
const GitHubStrategy = require('passport-github2');
const koaJwt = require('koa-jwt');
const Thinky = require('thinky');
const serve = require('koa-static');

import koaRoutes from './routes';
import reactRoutes from '../client/react/routes';
import finalCreateStore from '../client/react/createStore';

const app = new Koa();

const store = finalCreateStore();

if (global.__DEVELOPMENT__) {
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
    match({ routes: reactRoutes, location: ctx.request.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log('500');
            //res.status(500).send(error.message);
        } else if (redirectLocation) {
            console.log('302');
            ctx.response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            console.log('200');
            if (global.__DEVELOPMENT__ != 'production') {
                global.webpackIsomorphicTools.refresh();
            }

            const serverRender = renderToString(
                <Provider store={store}>
                    <div>
                        <RouterContext {...renderProps} />
                    </div>
                </Provider >
            );
            const serverState = `<script charSet='UTF-8'>window.__INITIAL_STATE__=${serialize(store.getState())}</script>`;
            const assets = global.webpackIsomorphicTools.assets();
            const bundle = `<script src=${assets.javascript.main} charSet='UTF-8'></script>`;
            ctx.response.set('content-type', 'text/html');
            ctx.response.status = 200;
            ctx.response.body = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Clubo</title>
    
  </head>
  <body>
    <div id='app'>${serverRender}</div>
    ${serverState}
    ${bundle}
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
