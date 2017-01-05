import _ from 'underscore';
import uuid from 'node-uuid';
import { RECEIVE_POSTS } from '../actions';

const getSourceIds = (source, posts) =>
    posts.filter(post => post.source === source).map(post => post.sourceId);
const removeSourceIds = (toRemove, posts) =>
    _.reject(posts, post => _.contains(toRemove, post.sourceId));

export default (state = { }, action) => {
    switch (action.type) {
        case RECEIVE_POSTS: {
            const existingPosts = getSourceIds(action.source, _.values(state));
            const newPosts = removeSourceIds(existingPosts, action.posts);
            return Object.assign(
                {},
                state,
                _.object(_.map(newPosts, (item) => {
                    const newId = uuid.v4();
                    return [newId, _.extend(item, { id: newId })];
                }))
            );
        }
        default:
            return state;
    }
};
