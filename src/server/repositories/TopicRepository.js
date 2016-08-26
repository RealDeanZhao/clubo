import {TopicModel} from '../models/TopicModel';

const thinky = require('thinky')();
const r = thinky.r;


export default class TopicRepository {
    async getAll() {
        return await TopicModel.orderBy({ index: r.desc('lastReplyAt') }).filter({})
            .run();
    }
    async get(id) {
        const result = await TopicModel.filter({ id })
            .run();
        return result[0];
    }
    async create(topic) {
        let model = new TopicModel({
            title: topic.title,
            content: topic.content
        });

        await model.save();
    }
}