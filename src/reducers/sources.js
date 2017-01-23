import cloneDeep from 'lodash/cloneDeep';
import { REHYDRATE } from 'redux-persist/constants';
import { ADD_POST, DROP_POST, ADDED, DROPPED } from 'src/actions';

const defaultState = {
    'reddit::halo': {
        posts: {},
    },
    firebase: {
        posts: {},
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.sources || state;
        case ADD_POST: {
            const newState = cloneDeep(state);
            newState[action.source].posts[action.id] = ADDED;
            return newState;
        }
        case DROP_POST: {
            const newState = cloneDeep(state);
            newState[action.source].posts[action.id] = DROPPED;
            return newState;
        }
        default:
    }
    return state;
};
