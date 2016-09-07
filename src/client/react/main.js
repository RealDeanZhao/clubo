import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import {Router, browserHistory} from 'react-router';

import routes from './routes';
import createState from './createState';
import * as stores from './stores';

const state = createState();

ReactDOM.render(
  <Provider {...stores}>
    <div>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </div>
  </Provider >,
  document.getElementById('app')
);