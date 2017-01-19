import { combineEpics } from 'redux-observable';
import reddit from './reddit';

export default combineEpics(
    reddit,
);
