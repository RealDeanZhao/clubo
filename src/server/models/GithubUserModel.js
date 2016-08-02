const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const GithubUserModel = thinky.createModel('GithubUser', {
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

    localUserId: String
});

export {GithubUserModel}