import React from 'react';
import IconButton from 'material-ui/IconButton';
import FilterIcon from 'material-ui/svg-icons/content/filter-list';
import equip from './equip';

const Filter = ({ filter }) => (
    <IconButton onClick={filter}>
        <FilterIcon />
    </IconButton>
);

export default equip(Filter);
