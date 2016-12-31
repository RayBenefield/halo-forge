import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';
export const INVALIDATE_SOURCE = 'INVALIDATE_SOURCE';
export const RESIZE_LAYOUT = 'RESIZE_LAYOUT';
export const RESIZE_ITEM = 'RESIZE_ITEM';

export function resizeItem() {
    return {
        type: RESIZE_ITEM,
        height: window.innerHeight,
        width: window.innerWidth,
    };
}

export function resizeLayout() {
    return {
        type: RESIZE_LAYOUT,
        height: window.innerHeight,
        width: window.innerWidth,
    };
}

export function selectSource(source) {
    return {
        type: SELECT_SOURCE,
        source,
    };
}

export function invalidateSource(source) {
    return {
        type: INVALIDATE_SOURCE,
        source,
    };
}

function requestPosts(source) {
    return {
        type: REQUEST_POSTS,
        source,
    };
}

function receivePosts(source, json) {
    return {
        type: RECEIVE_POSTS,
        source,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now(),
    };
}

function fetchPosts(source) {
    return (dispatch) => {
        dispatch(requestPosts(source));
        return fetch(`https://www.reddit.com/r/${source}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(source, json)));
    };
}

function shouldFetchPosts(state, source) {
    const posts = state.postsBySource[source];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    }
    return posts.didInvalidate;
}

export function fetchPostsIfNeeded(source) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), source)) {
            return dispatch(fetchPosts(source));
        }
        return null;
    };
}
