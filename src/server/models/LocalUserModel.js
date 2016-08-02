const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const LocalUserModel = thinky.createModel('LocalUser', {
    username: String,
    password: String,
    score: type.number().default(0),
    topicCount: type.number().default(0),
    replyCount: type.number().default(0),
    collectTagCount: type.number().default(0),
    collectTopicCount: type.number().default(0),
    createAt: type.date().default(Date.now()),
    updateAt: type.date().default(Date.now()),
    isStart: Boolean,
    level: String,
    active: type.boolean().default(false),
    receiveReplyMail: type.boolean().default(false),
    receiveAtMail: type.boolean().default(false),
    fromWP: Boolean,
    retrieveTime: Number,
    retrieveKey: String,
    accessToken: String,
    isBlock: type.boolean().default(false),

    githubUserId:String
});



export {LocalUserModel}