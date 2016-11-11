import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import favorites from './favoritesReducer';

const reducers = combineReducers({
  favorites: favorites
});

const middleware = applyMiddleware(thunk, logger());

export const store = createStore(reducers, middleware);
