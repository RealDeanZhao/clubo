import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';

class UserStore {
    @observable user = {};

    constructor() {

    }

    @action updateUser = async (user) => {
        const response = await fetch(`/api/v1/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        this.user = user;
    }
}

const store = new UserStore();
export default store;
export {UserStore};