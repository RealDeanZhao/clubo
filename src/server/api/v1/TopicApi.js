import {TopicRepository} from '../../repositories';

const topicRepository = new TopicRepository();

export default class TopicApi {
    async getAll(ctx, next) {
        let topics = await topicRepository.getAll();
        ctx.body = JSON.stringify(topics);
    }

    async get(ctx, next) {
        let topic = await topicRepository.get(ctx.params.id);
        ctx.body = JSON.stringify(topic);
    }

    async create(ctx, next) {
        console.log(ctx.request.body);
        let result = await topicRepository.create(ctx.request.body);
        ctx.body = 'haha';
    }

    async update(ctx, next) {

    }

    async delete(ctx, next) {

    }
}

