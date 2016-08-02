import {LocalUserModel} from './LocalUserModel';
import {TopicModel} from './TopicModel';
import {TopicCollectModel} from './TopicCollectModel';
import {ReplyModel}  from './ReplyModel';
import {MessageModel}  from './MessageModel';
import {GithubUserModel} from './GithubUserModel';

// have to build the relationship here
// FYI: https://thinky.io/documentation/architecture/
//GithubUserModel.hasOne(LocalUserModel, 'user', 'id', 'githubUserId')
//LocalUserModel.hasOne(GithubUserModel, 'githubUser', 'id', 'localUserId')


// index management
GithubUserModel.ensureIndex('loginName');
LocalUserModel.ensureIndex('userName');

export {
LocalUserModel,
TopicModel,
TopicCollectModel,
ReplyModel,
MessageModel,
GithubUserModel
}