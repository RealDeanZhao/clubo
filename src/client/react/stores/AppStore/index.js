import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';
import reactCookie from 'react-cookie';

class AppStore {
    @observable isAuthenticated;

    constructor() {
        this.verifyToken();
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
}

const store = new AppStore();
export default store;
export {AppStore};