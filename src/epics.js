import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import { REQUEST_POSTS, RECEIVE_POSTS } from './actions';

export default action$ =>
    action$.ofType(REQUEST_POSTS)
        .delay(1000)
        .mapTo({ type: RECEIVE_POSTS, posts: [] });
