import _ from 'underscore';
import { RESIZE_LAYOUT } from 'src/actions';

export default (state = { height: 0, width: 0 }, action) => {
    switch (action.type) {
        case RESIZE_LAYOUT: {
            return _.omit(action, 'type');
        }
        default:
    }
    return state;
};
