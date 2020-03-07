import { createStore } from 'redux';
import reducer from './rootReducer';
import middleware from './middleware';

const store = createStore(reducer, {}, middleware);

export default store;
