import map from 'lodash/map';
import assign from 'lodash/assign';
import reject from 'lodash/reject';
import values from 'lodash/values';
import includes from 'lodash/includes';
import fromPairs from 'lodash/fromPairs';
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
            const existingPosts = getSourceIds(action.source, values(state[action.source]));
            const newPosts = removeSourceIds(existingPosts, action.posts);
            return assign(
                {},
                state,
                {
                    [action.source]: fromPairs(
                        map(
                            newPosts,
                            item => [
                                item.sourceId,
                                assign(item, { id: item.sourceId }),
                            ],
                        ),
                    ),
                },
            );
        }
        default:
            return state;
    }
};
