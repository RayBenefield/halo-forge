import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { fetchPosts } from '../actions';
import Picker from '../components/Picker';
import Header from '../components/Header';
import Content from '../components/Content';

const Layout = ({ dispatch, selectedSource }) => {
    dispatch(fetchPosts(selectedSource));
    return (
        <div className="flex flex-column h-100">
            <div style={{ height: '7rem' }}>
                <Header />
                <Paper className="relative z-5" zDepth={4}>
                    <Picker />
                </Paper>
            </div>
            <div className="relative h-100 overflow-x-hidden overflow-y-scroll flex-auto">
                <Content />
            </div>
        </div>
    );
};

function mapStateToProps({ selectedSource }) {
    return {
        selectedSource,
    };
}

export default connect(mapStateToProps)(Layout);
