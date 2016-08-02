import * as fetch from 'isomorphic-fetch';

import {SHOW_SIGNGIN_MODAL} from '../constants';
import {CLOSE_SIGNGIN_MODAL} from '../constants';
import {CLEAR_SIGNGIN_MODAL} from '../constants';

export const showSignInModal = () => {
    return {
        type: SHOW_SIGNGIN_MODAL
    }
}

export const closeSignInModal = () => {
    return {
        type: CLOSE_SIGNGIN_MODAL
    }
}

export const clearSignInModal = () => {
    return {
        type: CLOSE_SIGNGIN_MODAL
    }
}

