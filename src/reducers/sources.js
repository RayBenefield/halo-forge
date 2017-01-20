import cloneDeep from 'lodash/cloneDeep';
import { REHYDRATE } from 'redux-persist/constants';
import { CHANGE_STATUS } from 'src/actions';

const defaultState = {
    halo: {
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
        case CHANGE_STATUS: {
            const newState = cloneDeep(state);
            newState[action.source].posts[action.id] = action.status;
            return newState;
        }
        default:
    }
    return state;
};
