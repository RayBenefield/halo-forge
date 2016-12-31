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

function receivePosts(source, posts) {
    return {
        type: RECEIVE_POSTS,
        source,
        posts,
        receivedAt: Date.now(),
    };
}

function fetchRedditPosts(subreddit) {
    return (dispatch) => {
        dispatch(requestPosts(subreddit));
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(
                subreddit,
                json.data.children.map(child => child.data)
            )));
    };
}

function fetchPosts(source) {
    if (source === 'halo' || source === 'forge') {
        return fetchRedditPosts(source);
    }
    return (dispatch) => {
        dispatch(receivePosts(source, []));
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
