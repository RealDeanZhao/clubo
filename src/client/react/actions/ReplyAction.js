import fetch from 'isomorphic-fetch';
import {CREATE_REPLY_SUCCESS, RECEIVE_REPLIES} from '../constants';

function createReplySuccess() {
    return {
        type: CREATE_REPLY_SUCCESS
    }
}

export const createReply = (reply) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/topics/${reply.topicId}/replies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reply)
        });

        dispatch(createReplySuccess());
    }
}

function receiveReplies(replyList) {
    return {
        type: RECEIVE_REPLIES,
        replyList: replyList
    }
}
export const fetchReplies = (topicId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/topics/${topicId}/replies`);
        const replyList = await response.json();
        dispatch(receiveReplies(replyList))
    }
}
