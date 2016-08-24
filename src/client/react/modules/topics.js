import fetch from 'isomorphic-fetch';

export const LOAD = 'clubo/topics/LOAD';
export const LOAD_SUCCESS = 'clubo/topics/LOAD_SUCCESS';
export const LOAD_FAILURE = 'clubo/topics/LOAD_FAILURE';

export const GET = 'clubo/topics/GET';
export const GET_SUCCESS = 'clubo/topics/GET_SUCCESS';
export const GET_FAILURE = 'clubo/topics/GET_FAILURE';

export const ADD = 'club/topics/ADD';
export const ADD_SUCCESS = 'clubo/topics/ADD_SUCCESS';
export const ADD_FAILURE = 'clubo/topics/ADD_FAILURE';

const initialState = {
    done: false
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
                data: action.result,
                error: null
            };
        case LOAD_ERROR:
            return {
                ...state,
                done: true,
                doing: false,
                data: null,
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
                data: action.result,
                error: null
            };
        case GET_ERROR:
            return {
                ...state,
                done: true,
                doing: false,
                data: null,
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
        case ADD_ERROR:
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

export const _load = () => {
    return async (dispatch) => {
        dispatch(load());
        const response = await fetch('/api/v1/topics');
        const result = await response.json();
        dispatch(loadSuccess(topicList))
    }
}

export function get() {
    return {
        type: GET
    }
}

export function getSuccess(result) {
    return {
        type: GET_SUCCESS,
        result
    }
}

export function getFailure(error) {
    return {
        type: GET_SUCCESS,
        error
    }
}

export const _get = (id) => {
    return async (dispatch) => {
        dispatch(get());
        const response = await fetch(`/api/v1/topics/${id}`);
        const topicDetail = await response.json();
        dispatch(getTopicSuccess(topicDetail))
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

export const _add = (topic) => {
    return async (dispatch) => {
        dispatch(add());
        const response = await fetch(`/api/v1/topics`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(topic)
        });

        dispatch(addSuccess());
    }
}
