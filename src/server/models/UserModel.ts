const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const UserModel = thinky.createModel('User', {
    //github
    loginName: String,
    name: String,
    avatarUrl: String,
    pass: String,
    email: type.string().email(),
    url: String,
    htmlUrl: String,
    followerUrl: String,
    followingUrl: String,
    gistsUrl: String,
    starredUrl: String,
    subscriptionsUrl: String,
    organizationsUrl: String,
    reposUrl: String,
    eventsUrl: String,
    receivedEventsUrl: String,

    location: String,
    signature: String,
    profile: String,
    blog: String,
    publicRepos: type.number().default(0),
    githubId: String,
    githubUsername: String,
    githubAccessToken: String,
    followerCount: type.number().default(0),
    followingCount: type.number().default(0),

    //clubo
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

    //other 
    weibo: String,
    isBlock: Boolean

});

export {UserModel}