import cloneDeep from 'lodash/cloneDeep';
import { REHYDRATE } from 'redux-persist/constants';
import { ADD_POST, DROP_POST, ADDED, DROPPED } from 'src/actions';

const defaultState = {
    'halo-forge': {
        sources: [
            {
                prefix: 'reddit::halo',
                source: 'reddit',
                subreddit: 'halo',
                name: '/r/halo',
            },
            {
                prefix: 'reddit::forge',
                source: 'reddit',
                subreddit: 'forge',
                name: '/r/forge',
            },
        ],
        posts: {
            'reddit::halo': {},
            'reddit::forge': {},
        },
    },
    firebase: {
        posts: {},
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.qus || state;
        case ADD_POST: {
            const newState = cloneDeep(state);
            newState[action.qu].posts[action.post.source.prefix][action.id] = ADDED;
            return newState;
        }
        case DROP_POST: {
            const newState = cloneDeep(state);
            newState[action.qu].posts[action.post.source.prefix][action.id] = DROPPED;
            return newState;
        }
        default:
    }
    return state;
};
