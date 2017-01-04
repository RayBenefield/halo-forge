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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ height: '100px', flex: 0, paddingBottom: '12px' }}>
                <Header />
                <Paper zDepth={4} style={{ zIndex: 5, position: 'relative' }}>
                    <Picker />
                </Paper>
            </div>
            <div style={{ position: 'relative', flex: 1, height: '100%', overflowX: 'hidden', overflowY: 'scroll' }}>
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
