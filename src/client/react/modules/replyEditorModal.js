export const SHOW = 'clubo/replyEditorModal/SHOW';
export const CLOSE = 'clubo/replyEditorModal/CLOSE';
export const CLEAR = 'clubo/replyEditorModal/CLEAR';

const initialState = {
    show: false,
    topicId: '',
    id: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                ...action.params,
                show: true
            };
        case CLOSE:
            return {
                ...state,
                show: false
            };
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

export const show = (params) => {
    return {
        type: SHOW,
        params
    }
}

export const close = () => {
    return {
        type: CLOSE
    }
}

export const clear = () => {
    return {
        type: CLEAR
    }
}

