import { combineReducers } from 'redux';
import filter from './filter';
import selectedQu from './selectedQu';
import posts from './posts';
import profile from './profile';
import qus from './qus';
import isFetching from './isFetching';

const rootReducer = combineReducers({
    profile,
    posts,
    isFetching,
    selectedQu,
    filter,
    qus,
});

export default rootReducer;
