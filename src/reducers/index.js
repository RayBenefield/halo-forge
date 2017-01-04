import { combineReducers } from 'redux';
import layout from './layout';
import filter from './filter';
import selectedSource from './selectedSource';
import posts from './posts';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    layout,
    posts,
    isFetching,
    selectedSource,
    filter,
});

export default rootReducer;
