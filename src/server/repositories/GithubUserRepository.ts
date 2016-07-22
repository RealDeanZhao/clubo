import * as M from '../models';

const thinky = require('thinky')();
const r = thinky.r;

export {IGithubUserRepository, GithubUserRepository}

interface IGithubUserRepository {
    getUserById(id: string): any;
    getUsersByNames(names: [String]): any;
    getUsersByIds(ids: [String]): any;
    getUserByLoginName(loginName: String): any;
    getUserByMail(email: String): any;
    getUsersByQuery(query: String): any;
    getUserByNameAndKey(loginName: String, key: String): any;
    addOrUpdate(user: any): any;
}

class GithubUserRepository implements IGithubUserRepository {
    async getUserById(id: string) {
        return await M.GithubUserModel.get(id)
            .run();
    }

    getUsersByNames(names: [String]): any {
        return M.GithubUserModel.filter(function (user: any) {
            return r.expr(names).contains(user("loginName"));
        })
            .run();
    }

    getUsersByIds(ids: [String]): any {
        return M.GithubUserModel.filter(function (user: any) {
            return r.expr(ids).contains(user("id"));
        })
            .run();
    }

    async getUserByLoginName(loginName: String) {
        const result = await M.GithubUserModel.filter({ loginName: loginName })
            .run();
        return result[0];
    }

    getUserByMail(email: String): any {
        return M.GithubUserModel.filter({ email: email })
            .run();
    }

    getUsersByQuery(query: String): any {

    }

    getUserByNameAndKey(loginName: String, key: String): any {
        return M.GithubUserModel.filter({ loginName: loginName, retrieveKey: key })
            .run();
    }

    async addOrUpdate(user: any) {
        let userInDB = await this.getUserByLoginName(user.loginName);
        if (userInDB) {
            return await userInDB.save();
        } else {
            return await user.save();
        }
    }
}