export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';
export const CHANGE_STATUS = 'CHANGE_STATUS';
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

export function fetchPosts(source) {
    if (source === 'halo') {
        return {
            type: REQUEST_POSTS,
            source: 'halo',
        };
    }
    return receivePosts(source, []);
}

export function addPost(source, post) {
    return {
        type: CHANGE_STATUS,
        id: post.id,
        source,
        status: ADDED,
        post,
    };
}

export function dropPost(source, post) {
    return {
        type: CHANGE_STATUS,
        id: post.id,
        source,
        status: DROPPED,
        post,
    };
}
