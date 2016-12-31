import _ from 'underscore';
import { RESIZE_ITEM } from '../../actions';

export default (state = { width: 400, height: 120 }, action) => {
    switch (action.type) {
        case RESIZE_ITEM: {
            return _.omit(action, 'type');
        }
        default:
    }
    return state;
};
