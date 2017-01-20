import { combineReducers } from 'redux';
import filter from './filter';
import selectedSource from './selectedSource';
import posts from './posts';
import sources from './sources';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    posts,
    isFetching,
    selectedSource,
    filter,
    sources,
});

export default rootReducer;
