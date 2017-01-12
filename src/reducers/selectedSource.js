import { SELECT_SOURCE } from 'src/actions';

export default (state = 'halo', action) => {
    switch (action.type) {
        case SELECT_SOURCE:
            return action.source;
        default:
            return state;
    }
};