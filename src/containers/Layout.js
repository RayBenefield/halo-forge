import React from 'react';
import classes from 'classnames';
import Picker from 'src/components/Picker';
import Header from 'src/components/Header';
import Content from 'src/components/Content';

const Layout = () => (
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

export default Layout;
