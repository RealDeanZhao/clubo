import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, StoreCreator, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware    from 'redux-thunk';
import {rootReducer} from './reducers/Reducers';
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

const initialState = {};

const store = createStore(rootReducer, {}, enhancer);

const devtools = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('enable dev tools')
    return <C.DevTools/>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div>
        <C.App />
        {devtools() }
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);