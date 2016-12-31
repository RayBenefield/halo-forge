import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import equip from './equip';

const Picker = ({ value, onChange, options }) => (
    <div style={{ width: '100%' }}>
        <SelectField
            onChange={(e, i, v) => onChange(v)}
            value={value}
            style={{ backgroundColor: '#373737' }}
            labelStyle={{ paddingLeft: '16px' }}
            fullWidth
        >
            {options.map(option =>
                <MenuItem value={option} primaryText={option} key={option} />
            )}
        </SelectField>
    </div>
);

export default equip(Picker);
