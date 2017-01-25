import fetch from 'isomorphic-fetch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { REQUEST_POSTS, RECEIVE_POSTS } from 'src/actions';
import parsers from 'src/parsers';

const fetchSubreddit = (subreddit) => {
    const request = fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json());
    return Observable.from(request);
};

export default action$ =>
    action$.ofType(REQUEST_POSTS)
        .mergeMap(action =>
            // eslint-disable-next-line lodash/prefer-lodash-method
            fetchSubreddit(action.source.split('::')[1])
                .map(json => ({
                    type: RECEIVE_POSTS,
                    source: action.source,
                    posts: parsers[action.source.split('::')[1]](action.source.split('::')[1], json),
                }))
        );
