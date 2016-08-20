import {ReplyRepository} from '../../repositories';

const replyRepository = new ReplyRepository();

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
        console.log(ctx.request.body);
        let result = await replyRepository.create(ctx.request.body);
        ctx.body = 'haha';
    }

    async update(ctx, next) {

    }

    async delete(ctx, next) {

    }
}

