import fetch from 'isomorphic-fetch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { REQUEST_POSTS, RECEIVE_POSTS } from 'src/actions';
import parsers from 'src/parsers';

const fetchSubreddit = subreddit => {
    const request = fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json());
    return Observable.from(request);
}

export default action$ =>
    action$.ofType(REQUEST_POSTS)
        .switchMap(action =>
            fetchSubreddit(action.subreddit)
                .map(json => ({
                    type: RECEIVE_POSTS,
                    source: action.source,
                    subreddit: action.subreddit,
                    posts: parsers[action.source](action.subreddit, json),
                }))
        );
