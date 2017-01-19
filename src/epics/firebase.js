import firebase from 'firebase/app';
import 'firebase/database';
import { RECEIVE_POSTS } from 'src/actions';

const config = {
    apiKey: 'AIzaSyBByzrI7whW8oh19RGSc__5rmhTjqq9uTs',
    authDomain: 'halo-forge.firebaseapp.com',
    databaseURL: 'https://halo-forge.firebaseio.com',
    storageBucket: 'halo-forge.appspot.com',
    messagingSenderId: '699814173911',
};
firebase.initializeApp(config);

export default ({ dispatch }) => {
    firebase.database().ref('posts').on('child_added', snap => dispatch({
        type: RECEIVE_POSTS,
        source: 'firebase',
        subreddit: 'ray',
        posts: [snap.val()],
    }));
};
