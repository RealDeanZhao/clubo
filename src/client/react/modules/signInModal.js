export const SHOW = 'clubo/signInModal/SHOW';
export const CLOSE = 'clubo/signInModal/CLOSE';

export default function reducer (state = false, action) {
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


