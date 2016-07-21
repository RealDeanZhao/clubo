import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, StoreCreator, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers/Reducers';
import {ConnectedApp} from './containers/App';
import {DevTools} from './containers/DevTools';

const enhancer: any = compose(
  DevTools.instrument()
);

const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedApp />
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
);