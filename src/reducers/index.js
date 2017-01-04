import _ from 'underscore';
import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';
import layout from './layout';
import filter from './filter';
import selectedSource from './selectedSource';

function isFetching(state = false, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return true;
        case RECEIVE_POSTS:
            return false;
        default:
            return state;
    }
}

function posts(state = { }, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign(
                {},
                state,
                _.object(_.map(action.posts, item => [item.id, item]))
            );
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    layout,
    posts,
    isFetching,
    selectedSource,
    filter,
});

export default rootReducer;
