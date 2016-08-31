import fetch from 'isomorphic-fetch';
import {clear} from './replyEditorModal';

export const LOAD = 'clubo/replies/LOAD';
export const LOAD_SUCCESS = 'clubo/replies/LOAD_SUCCESS';
export const LOAD_FAILURE = 'clubo/replies/LOAD_FAILURE';

export const GET = 'clubo/replies/GET';
export const GET_SUCCESS = 'clubo/replies/GET_SUCCESS';
export const GET_FAILURE = 'clubo/replies/GET_FAILURE';

export const ADD = 'club/replies/ADD';
export const ADD_SUCCESS = 'clubo/replies/ADD_SUCCESS';
export const ADD_FAILURE = 'clubo/replies/ADD_FAILURE';

const initialState = {
    done: false,
    list: [],
    count: 0,
    recordsPerPage: 0,
    detail: {

    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                doing: true
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                done: true,
                doing: false,
                list: action.result.list,
                count: action.result.count,
                recordsPerPage: action.result.recordsPerPage,
                error: null
            };
        case LOAD_FAILURE:
            return {
                ...state,
                done: true,
                doing: false,
                list: null,
                error: action.error
            };
        case GET:
            return {
                ...state,
                loading: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                done: true,
                doing: false,
                detail: action.result,
                error: null
            };
        case GET_FAILURE:
            return {
                ...state,
                done: true,
                doing: false,
                detail: null,
                error: action.error
            };
        case ADD:
            return {
                ...state,
                doing: true
            };
        case ADD_SUCCESS:
            return {
                ...state,
                done: true,
                doing: false,
                data: action.result,
                error: null
            };
        case ADD_FAILURE:
            return {
                ...state,
                done: true,
                doing: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}

export function load() {
    return {
        type: LOAD
    }
}

export function loadSuccess(result) {
    return {
        type: LOAD_SUCCESS,
        result
    }
}

export function loadError(error) {
    return {
        type: LOAD_FAILURE,
        error
    }
}

export const _load = (query) => {
    return async (dispatch) => {
        dispatch(load());
        const response = await fetch(`/api/v1/topics/${query.topicId}/replies?page=${query.page}&recordsPerPage=${query.recordsPerPage}`);
        const result = await response.json();
        dispatch(loadSuccess(result))
    }
}

export function add() {
    return {
        type: ADD
    }
}

export function addSuccess() {
    return {
        type: ADD_SUCCESS
    }
}

export function addFailure(error) {
    return {
        type: ADD_SUCCESS,
        error
    }
}

export const _add = (reply) => {
    return async (dispatch) => {
        dispatch(add());
        const response = await fetch(`/api/v1/topics/${reply.topicId}/replies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reply)
        });
        dispatch(addSuccess());
        dispatch(_load({ topicId: reply.topicId, page: reply.page, recordsPerPage: reply.recordsPerPage }));
        dispatch(clear());
    }
}
