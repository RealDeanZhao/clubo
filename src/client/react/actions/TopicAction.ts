import * as fetch from 'isomorphic-fetch';

import {REQUEST_TOPICS, RECEIVE_TOPICS} from '../constants';

function requestTopics() {
    return {
        type: REQUEST_TOPICS
    }
}

function receiveTopics(topics: any) {
    return {
        type: RECEIVE_TOPICS,
        topics: topics
    }
}

export const fetchTopics: any = () => {
    return async (dispatch: any) => {      
        const response = await fetch('/api/v1/topics');
        const topics = await response.json();
        dispatch(receiveTopics(topics))
    }
}

