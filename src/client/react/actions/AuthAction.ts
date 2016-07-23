import * as fetch from 'isomorphic-fetch';

import {AUTH_USER} from '../constants';
import {AUTH_USER_SUCCESS} from '../constants';
import {AUTH_USER_FAILED} from '../constants';

export const authUser = (username: string, password: string): any => {
    return async (dispatch: any) => {
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

const authUserSuccess = (): any => {
    return {
        type: AUTH_USER_SUCCESS
    }
}

const authUserFailed = (): any => {
    return {
        type: AUTH_USER_FAILED
    }
}

