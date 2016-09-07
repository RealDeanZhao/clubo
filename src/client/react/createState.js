const { observable, extendObservable, toJS } = require('mobx')

const initialState = typeof window === 'object' && typeof window.__INITIAL_STATE__ !== 'undefined' ? window.__INITIAL_STATE__ : {}

let defaultState = observable({
    app: {
        title: 'Clubo',
        description: 'Clubo',
        host: ''
    },
    browse: {
        data: ''
    }
})

export default function () {
    return extendObservable(defaultState, initialState);
}