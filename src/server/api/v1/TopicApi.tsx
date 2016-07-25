import {TopicRepository} from '../../repositories';

const topicRepository = new TopicRepository();

export {TopicApi}

class TopicApi {
    getAll = async (ctx: any, next: any) => {
        var topics = await topicRepository.getTopics();
        ctx.body = JSON.stringify(topics);
    }

    getTopicById = async (ctx: any, next: any) => {
        var topic = await topicRepository.getTopicById(ctx.params.id);
        ctx.body = JSON.stringify(topic);
    }
}

