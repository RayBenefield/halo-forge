import React from 'react';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import equip from './equip';

const Refresher = ({ refresh }) => (
    <IconButton onClick={refresh}>
        <RefreshIcon />
    </IconButton>
);

export default equip(Refresher);
