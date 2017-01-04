import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return true;
        case RECEIVE_POSTS:
            return false;
        default:
            return state;
    }
};
