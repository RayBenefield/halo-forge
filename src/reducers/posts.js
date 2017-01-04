import _ from 'underscore';
import { RECEIVE_POSTS } from '../actions';

export default (state = { }, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign(
                {},
                state,
                _.object(_.map(action.posts, item => [item.id, item]))
            );
        default:
            return state;
    }
};
