import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import equip from './equip';

const Filter = ({ status, filter }) => (
    <div style={{ display: 'inline' }}>
        <sub style={{ opacity: 0.54, verticalAlign: 'middle' }}>{status}</sub>
        <IconMenu
            iconButtonElement={<IconButton><FilterIcon /></IconButton>}
            onChange={filter}
            value={status}
        >
            <MenuItem value="NEW" primaryText="New" />
            <MenuItem value="ADDED" primaryText="Added" />
            <MenuItem value="DROPPED" primaryText="Dropped" />
        </IconMenu>
    </div>
);

export default equip(Filter);
