import React from 'react';
import classes from 'classnames';
import Refresher from './Refresher';
import Filter from './Filter';
import equip from './equip';

const Header = ({ login }) => (
    <div className={classes('bg-grey-900')} style={{ height: '64px' }}>
        <div className={classes('f2', 'roboto', 'di', 'pa4', 'white-text')}>Halo Forge</div>
        <div className={classes('f4', 'roboto', 'di', 'pa4', 'white-text')} onClick={login}>Login</div>
        <Filter />
        <Refresher />
    </div>
);

export default equip(Header);
