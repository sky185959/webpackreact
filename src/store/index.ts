import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as home from './home/reducer';

const store = createStore(
  combineReducers({...home}),
  applyMiddleware()
);

export default store;
