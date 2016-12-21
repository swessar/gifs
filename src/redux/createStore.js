import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { gifs } from './reducers/gifsReducer';
import { favorites } from './reducers/favoritesReducer';

const reducers = combineReducers({
  gifs: gifs,
  favorites: favorites
});

// const middleware = applyMiddleware(thunk, logger());

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// export const store = createStore(reducers, middleware);
export const store = createStore(reducers, enhancer);
