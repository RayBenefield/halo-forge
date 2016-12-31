import React from 'react';
import AppBar from 'material-ui/AppBar';
import Refresher from './Refresher';

const Header = () => (
    <AppBar
        title="Halo Forge"
        iconElementLeft={<div />}
        iconElementRight={<Refresher />}
    />
);

export default Header;
