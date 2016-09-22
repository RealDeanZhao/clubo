import Koa from 'koa';
import bodyParser  from 'koa-bodyparser';
import path from "path";
import serialize from 'serialize-javascript';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {match, RouterContext, Router, IndexRoute, Route, createMemoryHistory} from 'react-router';
import {renderToString} from 'react-dom/server';
import renderHtmlPage from './renderHtmlPage';

const Thinky = require('thinky');
const serve = require('koa-static');

import koaRoutes from './routes';
import reactRoutes from '../client/react/routes';
import {usePassport} from './middlewares';
import * as stores from '../client/react/stores';
import log from './utils/log';
import config from '../config';

const app = new Koa();

if (__DEV__) {
    log.info('web packing')
    const webpack = require('webpack');
    const webpackConfig = require('../../tools/webpack');
    const webpackDevMiddleware = require('koa-webpack-dev-middleware');
    const webpackHostMiddleware = require('koa-webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        stats: { colors: true }
    }));

    app.use(webpackHostMiddleware(compiler));
}

app.use(bodyParser());

usePassport(app);

app.use(serve(config.directories.dist));

koaRoutes(app);

app.use((ctx, next) => {
    if (__DEV__) {
        global.webpackIsomorphicTools.refresh();
    }

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

            const serverRender = renderToString(
                <Provider {...stores}>
                    <div>
                        <RouterContext {...renderProps} />
                    </div>
                </Provider>
            );

            try {
                ctx.response.set('content-type', 'text/html');
                ctx.response.status = 200;
                ctx.response.body = renderHtmlPage(serverRender);
            } catch (error) {
                log.error(error);
            }

        } else {
            next();
        }
    });
});

app.listen(config.server.port, () => {
    console.log(`server is running, port ${config.server.port}`);
});
