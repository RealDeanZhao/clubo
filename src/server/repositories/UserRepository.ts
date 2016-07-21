import {UserModel} from '../models/UserModel';

const thinky = require('thinky')();
const r = thinky.r;

export {IUserRepository, UserRepository}

interface IUserRepository {
    getUserById(id: string): any;
    getUsersByNames(names: [String]): any;
    getUsersByIds(ids: [String]): any;
    getUserByLoginName(loginName: String): any;
    getUserByMail(email: String): any;
    getUsersByQuery(query: String): any;
    getUserByNameAndKey(loginName: String, key: String): any;
    addOrUpdate(user: any): void;
}

class UserRepository implements IUserRepository {
    getUserById(id: string): any {
        return UserModel.get(id)
            .run();
    }

    getUsersByNames(names: [String]): any {
        return UserModel.filter(function (user: any) {
            return r.expr(names).contains(user("loginName"));
        })
            .run();
    }

    getUsersByIds(ids: [String]): any {
        return UserModel.filter(function (user: any) {
            return r.expr(ids).contains(user("id"));
        })
            .run();
    }

    async getUserByLoginName(loginName: String) {
        return await UserModel.filter({ loginName: loginName })
            .run();
    }

    getUserByMail(email: String): any {
        return UserModel.filter({ email: email })
            .run();
    }

    getUsersByQuery(query: String): any {

    }

    getUserByNameAndKey(loginName: String, key: String): any {
        return UserModel.filter({ loginName: loginName, retrieveKey: key })
            .run();
    }

    async addOrUpdate(user: any) {
        let userInDB = await this.getUserByLoginName(user.loginName);

        if (userInDB.length > 0) {
            userInDB.avatarUrl = user.avatar_url;
            userInDB.save();
        } else {
            user.save();
        }
    }
}