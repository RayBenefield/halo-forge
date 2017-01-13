import { combineReducers } from 'redux';
import filter from './filter';
import selectedSource from './selectedSource';
import posts from './posts';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    posts,
    isFetching,
    selectedSource,
    filter,
});

export default rootReducer;
