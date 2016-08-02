import {TopicCollectModel} from '../models/TopicCollectModel';
const thinky = require('thinky')();
const r = thinky.r;

export { TopicCollectRepository}

export default class TopicCollectRepository {
    getTopicCollect(userId, topicId) {
        return TopicCollectModel.filter({
            userId: userId,
            topicId: topicId
        })
            .run();
    }

    getTopicCollectsByUserId(userId) {
        return TopicCollectModel.filter({
            userId: userId
        })
            .run();
    }

    addOrUpdate(userId, topicId) {

    }

    remove(userId, topicId) {

    }
}


