import {ReplyModel} from '../models/ReplyModel';
const thinky = require('thinky')();
const r = thinky.r;

export default class ReplyRepository {
    async getAll(topicId) {
        return await ReplyModel.orderBy({ index: r.desc('updateAt') }).filter({ topicId: topicId })
            .run();
    }
    async get(id) {
        const result = await ReplyModel.filter({ id })
            .run();
        return result[0];
    }
    async create(reply) {
        let model = new ReplyModel({
            title: reply.title,
            content: reply.content,
            topicId: reply.topicId,
            replyId: reply.replyId,
            delete: false
        });

        await model.save();
    }
}