import { combineEpics } from 'redux-observable';
import reddit from './reddit';
import './firebase';

export default combineEpics(
    reddit,
);
