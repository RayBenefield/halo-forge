import firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'firebase/database';
import { RECEIVE_POSTS, CHANGE_STATUS } from 'src/actions';

const config = {
    apiKey: 'AIzaSyBByzrI7whW8oh19RGSc__5rmhTjqq9uTs',
    authDomain: 'halo-forge.firebaseapp.com',
    databaseURL: 'https://halo-forge.firebaseio.com',
    storageBucket: 'halo-forge.appspot.com',
    messagingSenderId: '699814173911',
};
firebase.initializeApp(config);

export const setupFirebase = ({ dispatch }) => {
    firebase.database().ref('posts').on('child_added', snap => dispatch({
        type: RECEIVE_POSTS,
        source: 'firebase',
        posts: [snap.val()],
    }));
};

export default action$ =>
    // eslint-disable-next-line lodash/prefer-lodash-method
    action$.ofType(CHANGE_STATUS)
        .map((action) => {
            action.post.added = new Date();
            firebase.database().ref(`posts/${action.id}`).set(action.post);
            return { type: 'SAVED' };
        });
