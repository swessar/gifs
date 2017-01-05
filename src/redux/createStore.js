import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import {reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import firebaseConfig from './firebaseConfig';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { favorites } from './reducers/favoritesReducer';
import { openForm } from './reducers/openFormReducer';

const reducers = combineReducers({
  favorites: favorites,
  openForm: openForm,
  firebase: firebaseStateReducer
});

// const middleware = applyMiddleware(thunk, logger());
const middleware = applyMiddleware(thunk);

const enhancer = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  reactReduxFirebase(firebaseConfig, { userProfile: 'users' })
);

export const store = createStore(reducers, enhancer);
