const { observable, extendObservable, toJS } = require('mobx')

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
    return toJS(defaultState)
}