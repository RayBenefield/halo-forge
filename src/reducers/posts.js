import map from 'lodash/map';
import assign from 'lodash/assign';
import reject from 'lodash/reject';
import values from 'lodash/values';
import includes from 'lodash/includes';
import fromPairs from 'lodash/fromPairs';
import cloneDeep from 'lodash/cloneDeep';
import filter from 'lodash/filter';
import { REHYDRATE } from 'redux-persist/constants';
import { RECEIVE_POSTS } from 'src/actions';

const getSourceIds = (source, posts) =>
    map(filter(posts, ['source', source]), 'sourceId');
const removeSourceIds = (toRemove, posts) =>
    reject(posts, post => includes(toRemove, post.sourceId));

export default (state = { }, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.posts || state;
        case RECEIVE_POSTS: {
            const existingPosts = getSourceIds(action.source, values(state));
            const newPosts = removeSourceIds(existingPosts, action.posts);
            return assign(
                {},
                state,
                fromPairs(map(newPosts, (item) => {
                    const newId = `${action.source}::${item.sourceId}`;
                    return [newId, assign(item, { id: newId })];
                }))
            );
        }
        case 'CHANGE_STATUS': {
            const newState = cloneDeep(state);
            newState[action.id].status = action.status;
            return newState;
        }
        default:
            return state;
    }
};
