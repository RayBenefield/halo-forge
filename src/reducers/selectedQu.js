import { SELECT_QU } from 'src/actions';

export default (state = 'reddit::halo', action) => {
    switch (action.type) {
        case SELECT_QU:
            return action.qu;
        default:
            return state;
    }
};
