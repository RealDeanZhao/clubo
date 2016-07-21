const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const UserModel = thinky.createModel('User', {
    name: String,
    loginName: String,
    pass: String,
    email: type.string().email(),
    url: String,
    avatarUrl: String,
    location: String,
    signature: String,
    profile: String,
    weibo: String,
    avatar: String,
    githubId: String,
    githubUsername: String,
    githubAccessToken: String,
    isBlock: Boolean,

    score: type.number().default(0),
    topicCount: type.number().default(0),
    replyCount: type.number().default(0),
    followerCount: type.number().default(0),
    followingCount: type.number().default(0),
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
    accessToken: String
});

export {UserModel}