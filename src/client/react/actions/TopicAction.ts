import * as fetch from 'isomorphic-fetch';

import {REQUEST_TOPICS, RECEIVE_TOPICS} from '../constants';

function requestTopics() {
    return {
        type: REQUEST_TOPICS
    }
}

function receiveTopics(topicList: any) {
    return {
        type: RECEIVE_TOPICS,
        topicList: topicList
    }
}

export const fetchTopics: any = () => {
    return async (dispatch: any) => {      
        const response = await fetch('/api/v1/topics');
        const topicList = await response.json();
        dispatch(receiveTopics(topicList))
    }
}

