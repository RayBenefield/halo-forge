import React from 'react';
import AppBar from 'material-ui/AppBar';
import Refresher from './Refresher';
import Filter from './Filter';

const Header = () => (
    <AppBar
        title="Halo Forge"
        iconElementLeft={<div />}
        iconElementRight={
            <div>
                <Filter />
                <Refresher />
            </div>
        }
    />
);

export default Header;
