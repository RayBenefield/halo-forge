import { combineReducers } from 'redux';
import filter from './filter';
import selectedQu from './selectedQu';
import posts from './posts';
import qus from './qus';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    posts,
    isFetching,
    selectedQu,
    filter,
    qus,
});

export default rootReducer;
