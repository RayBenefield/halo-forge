export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';
export const ADD_POST = 'ADD_POST';
export const DROP_POST = 'DROP_POST';
export const FILTER = 'FILTER';

export const NEW = 'NEW';
export const ADDED = 'ADDED';
export const DROPPED = 'DROPPED';

// Statuses not yet uesed.
// export const DELAYED = 'DELAYED';
// export const SAVED = 'SAVED';

export function filter(status = NEW) {
    return {
        type: FILTER,
        status,
    };
}

export function selectSource(source) {
    return {
        type: SELECT_SOURCE,
        source,
    };
}

export function receivePosts(source, posts) {
    return {
        type: RECEIVE_POSTS,
        source,
        posts,
        receivedAt: Date.now(),
    };
}

export function fetchPosts(qu, source) {
    if (qu === 'reddit::halo') {
        return {
            type: REQUEST_POSTS,
            source,
        };
    }
    return receivePosts(qu, []);
}

export function addPost(source, post) {
    return {
        type: ADD_POST,
        id: post.id,
        source,
        post,
    };
}

export function dropPost(source, post) {
    return {
        type: DROP_POST,
        id: post.id,
        source,
        post,
    };
}
