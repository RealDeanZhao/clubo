import * as fetch from 'isomorphic-fetch';

import {AUTH_USER} from '../constants';
import {AUTH_USER_SUCCESS} from '../constants';
import {AUTH_USER_FAILED} from '../constants';

export const authUser = (username, password) => {
    return async (dispatch) => {
        const response = await fetch('/api/v1/auth/local', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `username=${username}&password=${password}`
        });
        const user = await response.json();
        if (user) {
            dispatch(authUserSuccess());
        }
        console.log(user);
    }
}
 
const authUserSuccess = () => {
    return {
        type: AUTH_USER_SUCCESS
    }
}

const authUserFailed = () => {
    return {
        type: AUTH_USER_FAILED
    }
}

