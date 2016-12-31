import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import equip from './equip';

const Picker = ({ value, onChange, options }) => (
    <span>
        <SelectField
            floatingLabelText="Source"
            onChange={(e, i, v) => onChange(v)}
            value={value}
        >
            {options.map(option =>
                <MenuItem value={option} primaryText={option} key={option} />
            )}
        </SelectField>
    </span>
);

export default equip(Picker);
