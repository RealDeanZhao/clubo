import {REQUEST_TOPICS, RECEIVE_TOPICS} from '../constants';
import {GET_TOPIC_FAILURE, GET_TOPIC_SUCCESS, GET_TOPIC} from '../constants';


export const topicList = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TOPICS:
            return action.topicList;
        case REQUEST_TOPICS:
            return [
                {
                    id: 1,
                    title: 'Dean Zhao',
                    replyCount: 5,
                    visitCount: 10
                },
                {
                    id: 1,
                    title: 'Dean Zhao',
                    replyCount: 5,
                    visitCount: 10
                }
            ];
        default:
            return state;
    }
}

export const topicDetail = (state = {}, action) => {
    switch (action.type) {
        case GET_TOPIC_SUCCESS:
            return action.topicDetail;
        default:
            return state;
    }
}

export const topicDraft = (state = {}, action) => {
    switch (action.type){
        case SYNC_TOPIC_DRAFT:
            return action.topicDraft;
        default:
            return state;
    }
}