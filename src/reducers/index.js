import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import favorites from './favoritesReducer';

const reducers = combineReducers({
  favorites: favorites
});

// const middleware = applyMiddleware(thunk, logger());


const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


// export const store = createStore(reducers, middleware);
export const store = createStore(reducers, enhancer);
