import { combineEpics } from 'redux-observable';
import reddit from './reddit';
import { SignIntoFirebase, AddFirebasePost, DropFirebasePost } from './firebase';
import Login from './auth';

export default combineEpics(
    reddit,
    SignIntoFirebase,
    AddFirebasePost,
    DropFirebasePost,
    Login,
);
