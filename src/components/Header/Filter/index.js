import React from 'react';
import IconButton from 'material-ui/IconButton';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import equip from './equip';

const Filter = ({ status, filter }) => (
    <div style={{ display: 'inline' }}>
        <sub style={{ opacity: 0.5, verticalAlign: 'middle' }}>{status}</sub>
        <IconButton onClick={filter}>
            <FilterIcon />
        </IconButton>
    </div>
);

export default equip(Filter);
