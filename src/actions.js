export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_QU = 'SELECT_QU';
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

export function selectQu(qu) {
    return {
        type: SELECT_QU,
        qu,
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

export function fetchPosts(source) {
    return {
        type: REQUEST_POSTS,
        source,
    };
}

export function addPost(qu, post) {
    return {
        type: ADD_POST,
        id: post.id,
        qu,
        post,
    };
}

export function dropPost(qu, post) {
    return {
        type: DROP_POST,
        id: post.id,
        qu,
        post,
    };
}
