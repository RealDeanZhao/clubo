import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';
import reactCookie from 'react-cookie';

class AppStore {
    @observable isAuthenticated = false;

    constructor() {

    }

    @action verifyToken = async () => {
        const response = await fetch(`/api/v1/auth`, {
            credentials: 'same-origin'
        });

        if (response.status == 401) {
            this.isAuthenticated = false;
        } else {
            this.isAuthenticated = true;
        }
    }

    @action logout = async () => {
        const response = await fetch(`/api/v1/auth/logout`, {
            credentials: 'same-origin'
        });

        this.isAuthenticated = false;
    }
}

const store = new AppStore();
export default store;
export {AppStore};