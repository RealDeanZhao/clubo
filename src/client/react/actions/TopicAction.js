import fetch from 'isomorphic-fetch';

import {REQUEST_TOPICS, RECEIVE_TOPICS, SYNC_TOPIC_DRAFT} from '../constants';
import {GET_TOPIC, GET_TOPIC_SUCCESS, GET_TOPIC_FAILURE} from '../constants';
import {CREATE_TOPIC_SUCCESS} from '../constants';

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


function getTopicSuccess(topicDetail) {
    return {
        type: GET_TOPIC_SUCCESS,
        topicDetail: topicDetail
    }
}

export const getTopic = (id) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/topics/${id}`);
        const topicDetail = await response.json();
        dispatch(getTopicSuccess(topicDetail))
    }
}

function createTopicSuccess(){
    return {
        type: CREATE_TOPIC_SUCCESS
    }
}

export const createTopic = (topic) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/topics`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(topic)
        });
        //const result = await response.json();
        //console.log(result);
        dispatch(createTopicSuccess());
    }
}
