import Router from 'koa-router';
import {TopicApi, AuthApi, ReplyApi} from '../api/v1';

const topicApi = new TopicApi();
const authApi = new AuthApi();
const replyApi = new ReplyApi();
const router = new Router();


export default (app) => {

    router
        .get('/api/v1/topics', topicApi.getAll)
        .get('/api/v1/topics/:id', topicApi.get)
        .post('/api/v1/topics/', topicApi.create)
        .put('/api/v1/topics/:id', topicApi.update)
        .del('/api/v1/topics/:id', topicApi.delete);

    router
        .get('/api/v1/topics/:topicId/replies', replyApi.getAll)
        .get('/api/v1/topics/:topicId/replies/:id', replyApi.get)
        .post('/api/v1/topics/:topicId/replies/', replyApi.create)
        .put('/api/v1/topics/:topicId/replies/:id', replyApi.update)
        .del('/api/v1/topics/:topicId/replies/:id', replyApi.delete);

// .get('/', function (ctx, next) {
//     ctx.body = 'Hello World!';
//   })
//   .post('/users', function (ctx, next) {
//     // ...
//   })
//   .put('/users/:id', function (ctx, next) {
//     // ...
//   })
//   .del('/users/:id', function (ctx, next) {
//     // ...
//   });
    //router.post('/api/v1/auth/local', authApi.auth);

    //router.get('/api/v1/auth/github', passport.authenticate('github'));

    // router.get('/api/v1/auth/github/callback',
    //     async (ctx, next) => {
    //         return passport.authenticate('github', (user, info, status) => {
    //             console.log('github callback');
    //             console.log(user);
    //             ctx.redirect('/');
    //         })(ctx, next);
    //     }
    // );

    // router.get('/api/v1/auth/haha', async (ctx, next) => {
    //     console.log('5');
    //     console.log(ctx);
    // });

    // router.post('/api/v1/auth/login', (ctx, next) => {
    //     console.log(ctx.request.body);

    //     if (!(ctx.request.body.username === '1' && ctx.request.body.password === '2')) {
    //         ctx.body = 'Wrong user or password';
    //         return;
    //     }
    //     var profile = {
    //         username: ctx.request.body.username,
    //         id: 111
    //     }
    //     var token = jwt.sign(profile, 'clubo-jwt-secret', { expiresIn: 60 * 5 });

    //     ctx.body = token;
    // });

    // router.get('/api/v1/topics', koaJwt({
    //     secret: 'clubo-jwt-secret',
    //     passthrough: true
    // }), topicApi.getAll);

    app.use(router.routes());
}

