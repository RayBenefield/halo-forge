import React from 'react';
import classes from 'classnames';
import { connect } from 'react-redux';
import { fetchPosts } from 'src/actions';
import Picker from 'src/components/Picker';
import Header from 'src/components/Header';
import Content from 'src/components/Content';

const Layout = ({ dispatch, selectedSource }) => {
    dispatch(fetchPosts(selectedSource));
    return (
        <div className={classes('flex', 'flex-column', 'h-100')}>
            <div className={classes('h-7')}>
                <Header />
                <div className={classes('white-text', 'relative', 'z-5', 'z-depth-4')}>
                    <Picker />
                </div>
            </div>
            <div className={classes('relative', 'h-100', 'overflow-x-hidden', 'overflow-y-scroll', 'flex-auto')}>
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
