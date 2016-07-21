import {TopicRepository} from '../../repositories/TopicRepository';

const topicRepository = new TopicRepository();

export {TopicApi}

class TopicApi {
    getAll = async (ctx: any, next: any) => {
        var topic = await topicRepository.getTopics();
        ctx.body = JSON.stringify(topic);
    }
}

