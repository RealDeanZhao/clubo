import {SHOW_SIGNGIN_MODAL, CLOSE_SIGNGIN_MODAL} from '../constants';

export const showSignInModal = (state = false, action) => {
    switch (action.type) {
        case SHOW_SIGNGIN_MODAL:
            return true;
        case CLOSE_SIGNGIN_MODAL:
            return false;
        default:
            return state;
    }
}