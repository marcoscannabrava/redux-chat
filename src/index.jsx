// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import msgsReducer from './reducers/msgs_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import initialState from './constants';

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  msgs: msgsReducer,
  selectedChannel: selectedChannelReducer,
  channels: identityReducer,
  currentUser: identityReducer
});

const middleware = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
