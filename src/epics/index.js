import { combineEpics } from 'redux-observable';
import reddit from './reddit';
import { AddFirebasePost, DropFirebasePost } from './firebase';

export default combineEpics(
    reddit,
    AddFirebasePost,
    DropFirebasePost,
);
