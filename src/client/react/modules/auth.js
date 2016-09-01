import fetch from 'isomorphic-fetch';

export const AUTH = 'clubo/replies/AUTH';
export const AUTH_SUCCESS = 'clubo/replies/AUTH_SUCCESS';
export const AUTH_FAILURE = 'clubo/replies/AUTH_FAILURE';

const initialState = {
    localUser: {},
    githubUser: {},
    token: '',
    authenticated: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                localUser: action.localUser,
                githubUser: action.githubUser,
                token: action.token,
                authenticated: true
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                authenticated: true
            };
        default:
            return state;
    }
}

export function auth(localUser, githubUser, token) {
    return {
        type: AUTH,
        localUser,
        githubUser,
        token
    }
}

export function authSuccess() {
    return {
        type: AUTH_SUCCESS
    }
}

export function _auth(token) {
    return async (dispatch) => {
        let localToken = localStorage.getItem('token');
        if (localToken === 'undefined' || localToken === '') {
            console.log('set local token:' + token);
            localStorage.setItem('token', token);
            localToken = token;
        }

        const response = await fetch(`/api/v1/auth`, {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${localToken}`
            }
        });

        dispatch(authSuccess());
    }
}

