import { combineReducers } from 'redux';
import {
    SELECT_SOURCE, INVALIDATE_SOURCE,
    REQUEST_POSTS, RECEIVE_POSTS,
} from '../actions';
import layout from './layout';

function selectedSource(state = 'halo', action) {
    switch (action.type) {
        case SELECT_SOURCE:
            return action.source;
        default:
            return state;
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
}, action) {
    switch (action.type) {
        case INVALIDATE_SOURCE:
            return Object.assign({}, state, {
                didInvalidate: true,
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt,
            });
        default:
            return state;
    }
}

function postsBySource(state = { }, action) {
    switch (action.type) {
        case INVALIDATE_SOURCE:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.source]: posts(state[action.source], action),
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    layout,
    postsBySource,
    selectedSource,
});

export default rootReducer;
