import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, IndexRoute, Route, browserHistory, match} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import routes from './routes';
import * as C from './components';
import finalCreateStore from './createStore';

const store = finalCreateStore();
const histroy = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={histroy}>
        {routes}
      </Router>
    </div>
  </Provider >,
  document.getElementById('app')
);