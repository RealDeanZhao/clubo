import {TopicRepository} from '../../repositories';

const topicRepository = new TopicRepository();

export default class TopicApi {
    async getAll(ctx, next) {
        let query = {
            page: ctx.request.query.page === 'undefined' ? 1 : ctx.request.query.page,
            recordsPerPage: ctx.request.query.recordsPerPage === 'undefined' ? 20 : ctx.request.query.recordsPerPage
        }

        let list = await topicRepository.getAll(query);
        let count = await topicRepository.count();
        ctx.body = JSON.stringify({ list, count, recordsPerPage: 20 });
    }

    async get(ctx, next) {
        let topic = await topicRepository.get(ctx.params.id);
        topic.visitCount += 1;
        topic.save();
        ctx.body = JSON.stringify(topic);
    }

    async create(ctx, next) {
        let result = await topicRepository.create(ctx.request.body);
        ctx.body = 'haha';
    }

    async update(ctx, next) {

    }

    async delete(ctx, next) {

    }
}

