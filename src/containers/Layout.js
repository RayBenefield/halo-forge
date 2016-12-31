import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Picker from '../components/Picker';
import Header from '../components/Header';
import Content from '../components/Content';

const Layout = ({ dispatch, selectedSource }) => {
    dispatch(fetchPostsIfNeeded(selectedSource));
    return (
        <div>
            <Header />
            <Picker />
            <Content />
        </div>
    );
};

function mapStateToProps({ selectedSource }) {
    return {
        selectedSource,
    };
}

export default connect(mapStateToProps)(Layout);
