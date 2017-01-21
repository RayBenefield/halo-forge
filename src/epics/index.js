import { combineEpics } from 'redux-observable';
import reddit from './reddit';
import firebase from './firebase';

export default combineEpics(
    reddit,
    firebase,
);
