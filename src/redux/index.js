import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware())
                                         : applyMiddleware()
);
