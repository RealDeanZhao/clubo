import {TopicModel} from '../models/TopicModel';

const thinky = require('thinky')();
const r = thinky.r;


export default class TopicRepository {
    async getAll(query) {
        const {recordsPerPage, page} = query;

        return await TopicModel
            .orderBy({ index: r.desc('lastReplyAt') })
            .filter({})
            .slice(recordsPerPage * (page - 1), recordsPerPage * (page))
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
    async count() {
        return await TopicModel
            .count()
            .execute();
    }
}