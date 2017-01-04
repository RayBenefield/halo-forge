import fetch from 'rxjs-fetch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import { REQUEST_POSTS, RECEIVE_POSTS } from './actions';
import parsers from './parsers';

export default action$ =>
    action$.ofType(REQUEST_POSTS)
        .switchMap(action =>
            fetch(`https://www.reddit.com/r/${action.subreddit}.json`)
                .json()
                .map(json => ({
                    type: RECEIVE_POSTS,
                    posts: parsers[action.source](action.subreddit, json),
                }))
        );
