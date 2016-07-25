import {TopicModel} from '../models/TopicModel';

const thinky = require('thinky')();
const r = thinky.r;

export {  TopicRepository}

class TopicRepository {
    async getTopics() {
        return await TopicModel.filter({})
            .run();
    }
    async getTopicById(id: String) {
        const result = await TopicModel.filter({ id })
            .run();
        return result[0];
    }
}