import fetch from 'isomorphic-fetch';

import {REQUEST_TOPICS, RECEIVE_TOPICS, SYNC_TOPIC_DRAFT} from '../constants';
import {GET_TOPIC, GET_TOPIC_SUCCESS, GET_TOPIC_FAILURE} from '../constants';

function requestTopics() {
    return {
        type: REQUEST_TOPICS
    }
}

function receiveTopics(topicList) {
    return {
        type: RECEIVE_TOPICS,
        topicList: topicList
    }
}

export const fetchTopics = () => {
    return async (dispatch) => {
        const response = await fetch('/api/v1/topics');
        const topicList = await response.json();
        dispatch(receiveTopics(topicList))
    }
}

export const syncTopicDraft = (topicDraft) => {
    return {
        type: SYNC_TOPIC_DRAFT,
        topicDraft: topicDraft
    }
}


function getTopicSuccess(topicDetail) {
    return {
        type: GET_TOPIC_SUCCESS,
        topicDetail: topicDetail
    }
}

export const getTopic = (id: string) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/topics/${id}`);
        const topicDetail = await response.json();
        dispatch(getTopicSuccess(topicDetail))
    }
}

