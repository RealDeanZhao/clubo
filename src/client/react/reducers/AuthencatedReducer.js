import {AUTH_USER_SUCCESS, AUTH_USER_FAILED} from '../constants';

export const authencated = (state = false, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return true;
        case AUTH_USER_FAILED:
            return false;
        default:
            return state;
    }
}