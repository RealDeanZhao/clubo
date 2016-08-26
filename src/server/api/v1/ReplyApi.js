import {ReplyRepository, TopicRepository} from '../../repositories';

const replyRepository = new ReplyRepository();
const topicRepository = new TopicRepository();

export default class ReplyApi {
    async getAll(ctx, next) {
        const topicId = ctx.params.topicId;
        let replies = await replyRepository.getAll(topicId);
        ctx.body = JSON.stringify(replies);
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

