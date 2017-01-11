import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { fetchPosts } from 'src/actions';
import Picker from 'src/components/Picker';
import Header from 'src/components/Header';
import Content from 'src/components/Content';

const Layout = ({ dispatch, selectedSource }) => {
    dispatch(fetchPosts(selectedSource));
    return (
        <div className="flex flex-column h-100">
            <div className="h-7">
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
