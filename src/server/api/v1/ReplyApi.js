import {ReplyRepository, TopicRepository} from '../../repositories';

const replyRepository = new ReplyRepository();
const topicRepository = new TopicRepository();

export default class ReplyApi {
    async getAll(ctx, next) {
        const topicId = ctx.params.topicId;
        let query = {
            page: ctx.request.query.page === 'undefined' ? 1 : ctx.request.query.page,
            recordsPerPage: ctx.request.query.recordsPerPage === 'undefined' ? 20 : ctx.request.query.recordsPerPage,
            topicId
        }
        let list = await replyRepository.getAll(query);
        let count = await replyRepository.count(topicId);
        ctx.body = JSON.stringify({ list, count, recordsPerPage: 20 });
    }

    async get(ctx, next) {
        let topic = await replyRepository.get(ctx.params.id);
        ctx.body = JSON.stringify(topic);
    }

    async create(ctx, next) {
        let result = await replyRepository.create(ctx.request.body);
        let topic = await topicRepository.get(ctx.request.body.topicId);
        topic.replyCount += 1;
        topic.lastReplyAt = new Date();
        topic.save();
        ctx.body = 'haha';
    }

    async update(ctx, next) {

    }

    async delete(ctx, next) {

    }
}

