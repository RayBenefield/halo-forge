import { LOGGED_IN } from 'src/actions';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return action.profile;
        default:
    }
    return state;
};
