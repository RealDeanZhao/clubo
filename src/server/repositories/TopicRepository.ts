import {ITopicRepository} from './ITopicRepository';
import {TopicModel} from '../models/TopicModel';

const thinky = require('thinky')();
const r = thinky.r;

class TopicRepository implements ITopicRepository {
    getTopicById(id: String): any {

    }

    getCountByQuery(query: String): any {

    }

    getTopicsByQuery(query: String): any {

    }

    getLimit5w(): any {

    }

    getFullTopic(id: String): any {

    }

    updateLastReply(topicId: String, replyId: String): any {

    }

    getTopic(id: String): any {

    }

    reduceCount(id: String): any {

    }

    addOrUpdate(): any {

    }
}