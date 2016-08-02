import {TopicRepository} from '../../repositories';

const topicRepository = new TopicRepository();

export {TopicApi}

class TopicApi {
    async getAll(ctx, next) {
        var topics = await topicRepository.getTopics();
        ctx.body = JSON.stringify(topics);
    }

    async getTopicById(ctx, next) {
        var topic = await topicRepository.getTopicById(ctx.params.id);
        ctx.body = JSON.stringify(topic);
    }
}

