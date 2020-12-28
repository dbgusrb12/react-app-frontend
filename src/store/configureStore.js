import { applyMiddleware, combineReducers, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

export default () => {
  const store = createStoreWithMiddleware(
    combineReducers({

    }),
    composeEnhancers
  );
  return store;
};