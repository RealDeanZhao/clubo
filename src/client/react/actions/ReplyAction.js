import fetch from 'isomorphic-fetch';
import {CREATE_REPLY_SUCCESS} from '../constants';
 
function createReplySuccess(){
    return {
        type: CREATE_REPLY_SUCCESS
    }
}

export const createReply = (reply) => {
    return async (dispatch) => {
        const response = await fetch(`/api/v1/replies`, {
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
