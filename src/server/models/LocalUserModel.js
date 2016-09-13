const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const LocalUserModel = thinky.createModel('LocalUser', {
    username: String,
    password: String,
    displayName:String,
    topicCount: type.number().default(0),
    replyCount: type.number().default(0),
    createAt: type.date().default(function () {
        return new Date()
    }),
    updateAt: type.date().default(function () {
        return new Date()
    }),
    githubUserId:String,
    active: type.boolean().default(false)
});

export {LocalUserModel}