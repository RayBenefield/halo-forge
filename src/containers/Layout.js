import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Refresher from '../components/Refresher';
import Picker from '../components/Picker';
import Header from '../components/Header';
import Content from '../components/Content';

const Layout = ({ dispatch, selectedSource, lastUpdated }) => {
    dispatch(fetchPostsIfNeeded(selectedSource));
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

function mapStateToProps({ selectedSource, postsBySource }) {
    const {
        lastUpdated,
        items: posts,
    } = postsBySource[selectedSource] || {
        items: [],
    };

    return {
        selectedSource,
        posts,
        lastUpdated,
    };
}

export default connect(mapStateToProps)(Layout);
