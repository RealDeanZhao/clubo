import {SHOW_TOPIC_LIST} from '../constants';


export const topicReducer = (state: any, action: any) => {
    switch (action.type) {
        case SHOW_TOPIC_LIST:
            return state;
        default:
            return state;
    }
}