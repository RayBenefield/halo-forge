import { combineReducers } from 'redux';
import window from './windowSize';
import item from './itemSize';

export default combineReducers({
    window,
    item,
});
