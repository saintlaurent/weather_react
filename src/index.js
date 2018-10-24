import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  /**
   * Action Creator describes the action created by returning the type of action and payload data associated with the action
   * Middleware lets action pass, manipulates it, logs it or stops it
   * Reducers return the new state
   * Application state is changed through Redux
   */
