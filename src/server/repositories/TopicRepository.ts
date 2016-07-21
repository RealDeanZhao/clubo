import {TopicModel} from '../models/TopicModel';

const thinky = require('thinky')();
const r = thinky.r;

export {ITopicRepository, TopicRepository}

interface ITopicRepository {
    getTopicById(id: String): any;
    getCountByQuery(query: String): any;
    getTopicsByQuery(query: String): any;
    getFullTopic(id: String): any;
    getLimit5w(): any;
    updateLastReply(topicId: string, replyId: string): any;
    getTopic(id: String): any;
    reduceCount(id: String): any;
    addOrUpdate(): any;
    getTopics(): any;
}

class TopicRepository implements ITopicRepository {
    async getTopics() {
        return await TopicModel.filter({})
            .run();
    }
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