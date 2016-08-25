import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, IndexRoute, Route, browserHistory, match} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import routes from './routes';
import reducers from './modules/reducer';
import * as C from './components';
import finalCreateStore from './createStore';

const store = finalCreateStore();

// const devtools = () => {
//   if (process.env.NODE_ENV !== 'production') {
//     console.log('enable dev tools')
//     return <C.DevTools/>
//   }
// }

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