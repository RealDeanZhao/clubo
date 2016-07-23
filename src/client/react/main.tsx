import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware    from 'redux-thunk';
import {Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const RF = require('redux-form');

import * as Reducers from './reducers';
import * as C from './components';

let composeParams: any[] = [];
if (process.env.NODE_ENV !== 'production') {
  console.log('dev environment');
  composeParams.push(C.DevTools.instrument());
}

const enhancer: any = compose(
  applyMiddleware(thunkMiddleware),
  ...composeParams
);

const myWindow: any = window;
myWindow.__INITIAL_STATE__ = myWindow.__INITIAL_STATE__ || {};
const initialState = myWindow.__INITIAL_STATE__;

const store = createStore(
  combineReducers({
    topicList: Reducers.topicList,
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
          <Route  path="/app" >
          </Route>
        </Route>
      </Router>
      <div>
        {devtools() }
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);