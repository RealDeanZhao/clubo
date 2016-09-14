import Koa from 'koa';
import bodyParser  from 'koa-bodyparser';
import path from "path";
import serialize from 'serialize-javascript';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {match, RouterContext, Router, IndexRoute, Route, createMemoryHistory} from 'react-router';
import {renderToString} from 'react-dom/server';
import reactCookie from 'react-cookie';

const Thinky = require('thinky');
const serve = require('koa-static');

import koaRoutes from './routes';
import reactRoutes from '../client/react/routes';
import {usePassport} from './middlewares';
import * as stores from '../client/react/stores';
import log from './utils/log';

const app = new Koa();

if (__DEVELOPMENT__) {
    log.info('web packing')
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

app.use(bodyParser());

usePassport(app);

app.use(serve('.'));

koaRoutes(app);

app.use((ctx, next) => {
    const location = ctx.request.url;
    const history = createMemoryHistory(location);
    match({ routes: reactRoutes, location, history }, (error, redirectLocation, renderProps) => {
        if (error) {
            log.error(error);
        } else if (redirectLocation) {
            log.debug('status: 302');
            ctx.response.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            log.debug('status: 200');
            if (__DEVELOPMENT__) {
                global.webpackIsomorphicTools.refresh();
            }
            
            const serverRender = renderToString(
                <Provider {...stores} >
                    <div>
                        <RouterContext {...renderProps} />
                    </div>
                </Provider >
            );
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
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div id='app'>${serverRender}</div>
    <script src="//cdn.bootcss.com/react/15.2.1/react.js"></script>
    <script src="//cdn.bootcss.com/react/15.2.1/react-dom.min.js"></script>
    ${bundle}
  </body>
</html>
`;
            //unplug();
        } else {
            next();
        }
    });
});

app.listen(3000, () => {
    console.log('server is running!');
});
