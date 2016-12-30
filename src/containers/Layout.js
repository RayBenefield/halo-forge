import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Refresher from '../components/Refresher';
import Picker from '../components/Picker';
import Header from '../components/Header';
import Content from '../components/Content';

const Layout = ({ dispatch, selectedSubreddit, lastUpdated }) => {
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
    return (
        <div>
            <Header />
            <Picker />
            <Refresher />
            <p>
                {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>
                }
            </p>
            <Content />
        </div>
    );
};

function mapStateToProps({ selectedSubreddit, postsBySubreddit }) {
    const {
        lastUpdated,
        items: posts,
    } = postsBySubreddit[selectedSubreddit] || {
        items: [],
    };

    return {
        selectedSubreddit,
        posts,
        lastUpdated,
    };
}

export default connect(mapStateToProps)(Layout);
