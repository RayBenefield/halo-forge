import { NEW, FILTER } from 'src/actions';

export default (state = NEW, action) => {
    switch (action.type) {
        case FILTER: {
            return action.status;
        }
        default:
    }
    return state;
};
