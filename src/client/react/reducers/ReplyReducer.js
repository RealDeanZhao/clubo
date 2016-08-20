import {RECEIVE_REPLIES} from '../constants';

export const replyList = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_REPLIES:
            return action.replyList;
        default:
            return state;
    }
}
