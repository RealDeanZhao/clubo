import {IUserRepository} from './IUserRepository';
import {UserModel} from '../models/UserModel';

const thinky = require('thinky')();
const r = thinky.r;

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

    getUserByLoginName(loginName: String): any {
        return UserModel.filter({ loginName: loginName })
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

    addOrUpdate(): void {

    }
}

export {UserRepository}