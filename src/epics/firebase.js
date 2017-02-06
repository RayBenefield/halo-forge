import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'firebase/database';
import { LOGGED_IN, RECEIVE_POSTS, ADD_POST, DROP_POST } from 'src/actions';

const config = {
    apiKey: 'AIzaSyBByzrI7whW8oh19RGSc__5rmhTjqq9uTs',
    authDomain: 'halo-forge.firebaseapp.com',
    databaseURL: 'https://halo-forge.firebaseio.com',
    storageBucket: 'halo-forge.appspot.com',
    messagingSenderId: '699814173911',
};
firebase.initializeApp(config);

export const setupFirebase = ({ dispatch }) => {
    const qurRef = firebase.database().ref('Qur/Ray Benefield/halo-forge/');
    qurRef.on('child_added', (qurSnap) => {
        qurRef.child(qurSnap.key).on('child_added', sourceSnap => dispatch({
            type: RECEIVE_POSTS,
            source: qurSnap.key,
            posts: [sourceSnap.val()],
        }));
    });
};

export const SignIntoFirebase = action$ =>
    action$.ofType(LOGGED_IN)
        .switchMap(({ profile: { firebaseTokens } }) =>
            // eslint-disable-next-line lodash/prefer-lodash-method
            Observable.fromPromise(
                firebase.auth().signInWithCustomToken(firebaseTokens.idToken)
            )
                .map(() => ({ type: 'FIREBASED' }))
        );

export const AddFirebasePost = action$ =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    action$.ofType(ADD_POST)
        .map((action) => {
            action.post.added = new Date();
            firebase.database().ref(`Qur/Ray Benefield/halo-forge/reddit::halo/${action.id}`).set(action.post);
            firebase.database().ref(`Qu/Ray Benefield/halo-forge/posts/reddit::halo/${action.id}`).set('ADDED');
            return { type: 'Qurd' };
        });

export const DropFirebasePost = action$ =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    action$.ofType(DROP_POST)
        .map((action) => {
            action.post.added = new Date();
            firebase.database().ref(`Qu/Ray Benefield/halo-forge/posts/reddit::halo/${action.id}`).set('DROPPED');
            return { type: 'Qurd' };
        });
