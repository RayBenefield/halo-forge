import fetch from 'rxjs-fetch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import { REQUEST_POSTS, RECEIVE_POSTS } from 'src/actions';
import parsers from 'src/parsers';
//import json1 from 'data/reddit-forge-1.json';
//import json2 from 'data/reddit-forge-2.json';

//let calledAlready = false;
export default action$ =>
    action$.ofType(REQUEST_POSTS)
        //.map((action) => {
            //const newAction = {
                //type: RECEIVE_POSTS,
                //source: action.source,
                //subreddit: action.subreddit,
                //posts: parsers[action.source](action.subreddit, calledAlready ? json2 : json1),
            //};
            //calledAlready = !calledAlready;
            //return newAction;
        //});
        .switchMap(action =>
            fetch(`https://www.reddit.com/r/${action.subreddit}.json`)
                .json()
                .map(json => ({
                    type: RECEIVE_POSTS,
                    source: action.source,
                    subreddit: action.subreddit,
                    posts: parsers[action.source](action.subreddit, json),
                }))
        );
