export const SHOW = 'clubo/cluboEditorModal/SHOW';
export const CLOSE = 'clubo/cluboEditorModal/CLOSE';

export default function reducer(state = false, action) {
    switch (action.type) {
        case SHOW:
            return true;
        case CLOSE:
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


