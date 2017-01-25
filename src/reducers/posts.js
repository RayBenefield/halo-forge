import map from 'lodash/map';
import assign from 'lodash/assign';
import reject from 'lodash/reject';
import values from 'lodash/values';
import includes from 'lodash/includes';
import fromPairs from 'lodash/fromPairs';
import cloneDeep from 'lodash/cloneDeep';
import { REHYDRATE } from 'redux-persist/constants';
import { RECEIVE_POSTS } from 'src/actions';

const getSourceIds = posts => map(posts, 'source.id');
const removeSourceIds = (toRemove, posts) =>
    reject(posts, post => includes(toRemove, post.source.id));

export default (state = { }, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.posts || state;
        case RECEIVE_POSTS: {
            const newState = cloneDeep(state);
            const existingPosts = getSourceIds(values(state[action.source]));
            const newPosts = removeSourceIds(existingPosts, action.posts);

            newState[action.source] = assign(
                {},
                state[action.source],
                fromPairs(
                    map(
                        newPosts,
                        item => [
                            item.source.id,
                            assign(item, { id: item.source.id }),
                        ],
                    ),
                )
            );
            return newState;
        }
        default:
            return state;
    }
};
