import {TopicRepository} from '../../repositories';

export default class TopicApi {
 
    async getAll(ctx, next) {
        var topics = await TopicRepository.getTopics();
        ctx.body = JSON.stringify(topics);
    }

    async getTopicById(ctx, next) {
        var topic = await TopicRepository.getTopicById(ctx.params.id);
        ctx.body = JSON.stringify(topic);
    }
}

