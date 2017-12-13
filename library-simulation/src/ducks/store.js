import { createStore, applyMiddleware } from 'redux';
import reducer from './data';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));