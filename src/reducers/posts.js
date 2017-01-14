import _ from 'underscore';
import uuid from 'node-uuid';
import { REHYDRATE } from 'redux-persist/constants';
import { RECEIVE_POSTS } from 'src/actions';

const getSourceIds = (source, posts) =>
    posts.filter(post => post.source === source).map(post => post.sourceId);
const removeSourceIds = (toRemove, posts) =>
    _.reject(posts, post => _.contains(toRemove, post.sourceId));

export default (state = { }, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.posts;
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
        case 'CHANGE_STATUS': {
            const newState = _.clone(state);
            newState[action.id].status = action.status;
            return newState;
        }
        default:
            return state;
    }
};
