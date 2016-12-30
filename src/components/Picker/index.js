import React from 'react';
import equip from './equip';

const Picker = ({ value, onChange, options }) => (
    <span>
        <select
            onChange={e => onChange(e.target.value)}
            value={value}
        >
            {options.map(option =>
                <option value={option} key={option}>
                    {option}
                </option>)
            }
        </select>
    </span>
);

export default equip(Picker);
