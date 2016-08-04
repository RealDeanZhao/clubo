import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const RF = require('redux-form');

import * as Reducers from './reducers';
import * as C from './components';

console.log(C);
let composeParams = [];
if (process.env.NODE_ENV !== 'production') {
  console.log('dev environment');
  composeParams.push(C.DevTools.instrument());
}

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  ...composeParams
);

const myWindow = window;
myWindow.__INITIAL_STATE__ = myWindow.__INITIAL_STATE__ || {};
const initialState = myWindow.__INITIAL_STATE__;

const store = createStore(
  combineReducers({
    topicList: Reducers.topicList,
    topicDetail: Reducers.topicDetail,
    showSignInModal: Reducers.showSignInModal,
    authencated: Reducers.authencated,
    routing: routerReducer,
    form: RF.reducer
  }), initialState, enhancer);

const devtools = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('enable dev tools')
    return <C.DevTools/>
  }
}

const histroy = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={histroy}>
        <Route path="/" component = {C.App}>
          <IndexRoute component ={ C.TopicList } >
          </IndexRoute>
          <Route path="topics/:id" component ={C.TopicDetail} ></Route>
        </Route>
      </Router>
      <div>
        {devtools() }
      </div>
    </div>
  </Provider >,
  document.getElementById('app')
);