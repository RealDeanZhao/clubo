import jwt from 'jsonwebtoken';
import log from '../utils/log';

export default async function (ctx, next) {
    const token = ctx.cookies.get('token');
    log.debug(token);
    if (token) {
        const decoded = jwt.verify(token, 'aaaa');
        if (decoded) {
            await next();
        } else {
            ctx.response.status = 401;
        }
    } else {
        ctx.response.status = 401;
    }
};
