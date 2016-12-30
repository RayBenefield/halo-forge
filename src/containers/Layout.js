import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Refresher from '../components/Refresher';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import Header from '../components/Header';

const Layout = (props) => {
    const { dispatch, selectedSubreddit } = props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
    const { posts, isFetching, lastUpdated } = props;
    return (
        <div>
            <Header />
            <Picker />
            <p>
                {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                }
                <Refresher />
            </p>
            {isFetching && posts.length === 0 &&
                <h2>Loading...</h2>
            }
            {!isFetching && posts.length === 0 &&
                <h2>Empty.</h2>
            }
            {posts.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                </div>
            }
        </div>
    );
};

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts,
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: [],
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
    };
}

export default connect(mapStateToProps)(Layout);
