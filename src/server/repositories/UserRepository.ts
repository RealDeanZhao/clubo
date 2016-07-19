import {UserModel} from '../models/UserModel';
const thinky = require('thinky')();
const r = thinky.r;

class UserRepository {
    getUserById(id: string): any {
        return UserModel.get(id).run();
    }

    getUsersByNames(names: [String]): any {
        return UserModel.filter(function (user: any) {
            return r.expr(names).contains(user("loginName"));
        }).run();
    }
}

export {UserRepository}