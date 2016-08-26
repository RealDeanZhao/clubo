export const SHOW = 'clubo/replyEditorModal/SHOW';
export const CLOSE = 'clubo/replyEditorModal/CLOSE';

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


