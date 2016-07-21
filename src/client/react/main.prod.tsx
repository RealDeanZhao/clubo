import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, StoreCreator, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers/Reducers';
import * as C from './components';

const enhancer: any = compose(

);

const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <C.App />
  </Provider>,
  document.getElementById('app')
);