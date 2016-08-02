import * as M from '../models';

const thinky = require('thinky')();
const r = thinky.r;

export default class LocalUserRepository {
    async getUserById(id) {
        return await M.LocalUserModel.get(id)
            .run();
    }

    async getUserByUserNameAndPassword(username, password) {
        const users = await M.LocalUserModel.filter({
            username,
            password
        })
            .run();
        return users[0];
    }

    async getUserByLoginName(loginName) {
        const users = await M.LocalUserModel.filter({ loginName: loginName })
            .run();
        return users[0];
    }

    async addOrUpdate(user) {
        let userInDB = await this.getUserByLoginName(user.loginName);
        if (userInDB) {
            return await userInDB.save();
        } else {
            return await user.save();
        }
    }
}