import React from 'react';
import classes from 'classnames';
import Refresher from './Refresher';
import Filter from './Filter';

const Header = () => (
    <div className={classes("bg-grey-900")} style={{ height: '64px' }}>
        <div className={classes("f2", "roboto", "di", "pa4", "white-text")}>Halo Forge</div>
        <Filter />
        <Refresher />
    </div>
);

export default Header;
