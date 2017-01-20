import React from 'react';
import classes from 'classnames';
import map from 'lodash/map';
import equip from './equip';

const Picker = React.createClass({
    getInitialState() {
        return { show: false };
    },
    show() {
        this.setState({ show: !this.state.show });
    },
    render() {
        const { value, options, onChange } = this.props;
        return (
            <div className={classes('w-100', 'bg-grey-800', 'roboto')} onClick={this.show}>
                <div className={classes('pa2', 'pl3')}>{value}</div>
                <hr />
                <div className={classes('di')}>
                    {this.state.show && map(options, option =>
                        <div className={classes('pa2', 'pl3')} onClick={() => onChange(option)}>{option}</div>
                    )}
                </div>
            </div>
        );
    },
});

export default equip(Picker);
