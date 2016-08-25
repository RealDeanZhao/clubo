import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './modules/reducer';

let composeParams = [];
if (process.env.NODE_ENV !== 'production') {
    console.log('dev environment');
    composeParams.push(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f);
}

const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    ...composeParams
);

const initialState = typeof window === 'object' && typeof window.__INITIAL_STATE__ !== 'undefined' ? window.__INITIAL_STATE__ : {}

export default function finalCreateStore() {
    return createStore(reducers, initialState, enhancer)
}