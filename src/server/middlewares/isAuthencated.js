import jwt from 'jsonwebtoken';

export default async function (ctx, next) {
    const token = resolveAuthorizationHeader(ctx.request.header);
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

function resolveAuthorizationHeader(header) {
    if (!header || !header.authorization) {
        return;
    }

    var parts = header.authorization.split(' ');

    if (parts.length === 2) {
        var scheme = parts[0];
        var credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
            return credentials;
        }
    }
}