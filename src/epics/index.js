import { combineEpics } from 'redux-observable';
import reddit from './reddit';
import { AddFirebasePost, DropFirebasePost } from './firebase';
import Login from './auth';

export default combineEpics(
    reddit,
    AddFirebasePost,
    DropFirebasePost,
    Login,
);
