import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, StoreCreator, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware    from 'redux-thunk';
import {rootReducer} from './reducers/Reducers';
import * as C from './components';

const enhancer: any = compose(
  applyMiddleware(thunkMiddleware),
  C.DevTools.instrument()
);

const initialState = {};

const store = createStore(rootReducer, {}, enhancer);


ReactDOM.render(
  <Provider store={store}>
    <div>
      <C.App />
      <C.DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
);