import {LocalUserModel} from '../models';

const thinky = require('thinky')();
const r = thinky.r;

export default class LocalUserRepository {
    async getById(id) {
        return await LocalUserModel.get(id)
            .run();
    }

    async getByGithubId(githubUserId) {
        const result = await LocalUserModel.filter({
            githubUserId
        }).run();

        return result[0];
    }

    async create(user) {
        let model = new LocalUserModel({
            username: user.username,
            displayName: user.displayName,
            githubUserId: user.githubUserId
        });

        return await model.save();
    }

    async update(user) {
        let userInDb = await this.getById(user.id);
        if (userInDb) {
            userInDb.username = user.username;
            userInDb.displayName = user.displayName;
            userInDb.active = user.active;
            return await userInDb.save();
        }
    }
}