export const SHOW = 'clubo/topicEditorModal/SHOW';
export const CLOSE = 'clubo/topicEditorModal/CLOSE';
export const CLEAR = 'clubo/replyEditorModal/CLEAR';

export default function reducer(state = false, action) {
    switch (action.type) {
        case SHOW:
            return true;
        case CLOSE:
            return false;
        case CLEAR:
            return false;
        default:
            return state;
    }
}

export const show = () => {
    return {
        type: SHOW
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


