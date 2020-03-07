import { combineReducers } from 'redux';
import { story } from './story/reducer';

const rootReducer = combineReducers({
    story,
});

export default rootReducer;
