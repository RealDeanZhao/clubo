import {TopicCollectModel} from '../models/TopicCollectModel';
import {ITopicCollectRepository} from './ITopicCollectRepository';
const thinky = require('thinky')();
const r = thinky.r;

class TopicCollectRepository implements ITopicCollectRepository {
    getTopicCollect(userId: String, topicId: String): any {
        return TopicCollectModel.filter({
            userId: userId,
            topicId: topicId
        })
            .run();
    }

    getTopicCollectsByUserId(userId: string): any {
        return TopicCollectModel.filter({
            userId: userId
        })
            .run();
    }

    addOrUpdate(userId: string, topicId: string): void {

    }

    remove(userId: string, topicId: String): void {

    }
}