import _ from 'underscore';
import uuid from 'node-uuid';
import fetch from 'isomorphic-fetch';
import rHaloSource from './r-halo.png';
import rHaloImage from './r-halo-image.png';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';
export const INVALIDATE_SOURCE = 'INVALIDATE_SOURCE';
export const RESIZE_LAYOUT = 'RESIZE_LAYOUT';
export const RESIZE_ITEM = 'RESIZE_ITEM';
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
                json.data.children.map((child) => {
                    const post = child.data;
                    // eslint-disable-next-line no-nested-ternary
                    const image = post.preview
                        ? (post.preview.images[0].resolutions.length > 0
                            ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&')
                            : post.preview.images[0].source.url
                        )
                        : rHaloImage;
                    return {
                        id: uuid.v4(),
                        status: [NEW, ADDED, DROPPED][_.random(0, 2)],
                        url: post.url,
                        title: post.title,
                        image,
                        source: `/r/${subreddit}`,
                        sourceId: post.id,
                        sourceImage: rHaloSource,
                        sourceUrl: `https://www.reddit.com/${post.permalink}`,
                        added: post.created_utc * 1000,
                    };
                })
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
