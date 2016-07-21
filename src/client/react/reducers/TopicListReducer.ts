import {REQUEST_TOPICS, RECEIVE_TOPICS} from '../constants';

export const topicList = (state: any = [], action: any) => {
    switch (action.type) {
        case RECEIVE_TOPICS:
            return action.topics;
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