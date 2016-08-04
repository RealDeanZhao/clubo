import * as M from '../models';

const thinky = require('thinky')();
const r = thinky.r;

export default class GithubUserRepository {
    async getUserById(id) {
        return await M.GithubUserModel.get(id)
            .run();
    }

    getUsersByNames(names) {
        return M.GithubUserModel.filter(function (user) {
            return r.expr(names).contains(user("loginName"));
        })
            .run();
    }

    getUsersByIds(ids) {
        return M.GithubUserModel.filter(function (user) {
            return r.expr(ids).contains(user("id"));
        })
            .run();
    }

    async getUserByLoginName(loginName) {
        const result = await M.GithubUserModel.filter({ loginName: loginName })
            .run();
        return result[0];
    }

    getUserByMail(email) {
        return M.GithubUserModel.filter({ email: email })
            .run();
    }

    getUsersByQuery(query) {

    }

    getUserByNameAndKey(loginName, key) {
        return M.GithubUserModel.filter({ loginName: loginName, retrieveKey: key })
            .run();
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