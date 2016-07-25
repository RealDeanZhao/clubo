import * as fetch from 'isomorphic-fetch';

import {REQUEST_TOPICS, RECEIVE_TOPICS} from '../constants';
import {GET_TOPIC, GET_TOPIC_SUCCESS, GET_TOPIC_FAILURE} from '../constants';

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


function getTopicSuccess(topicDetail: any) {
    return {
        type: GET_TOPIC_SUCCESS,
        topicDetail: topicDetail
    }
}

export const getTopic: any = (id: string) => {
    return async (dispatch: any) => {
        const response = await fetch(`/api/v1/topics/${id}`);
        const topicDetail = await response.json();
        dispatch(getTopicSuccess(topicDetail))
    }
}

