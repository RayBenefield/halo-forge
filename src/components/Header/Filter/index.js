import React from 'react';
import classes from 'classnames';
import map from 'lodash/map';
import equip from './equip';

const Filter = React.createClass({
    getInitialState() {
        return { show: false };
    },
    show() {
        this.setState({ show: !this.state.show });
    },
    render() {
        const { status } = this.props;
        const options = ['NEW', 'ADDED', 'DROPPED'];
        return (
            <div className={classes('di')}>
                <sub className={classes('grey-text')}>{status}</sub>
                <svg
                    onClick={this.show}
                    style={{
                        display: 'inline-block',
                        color: 'rgb(255, 255, 255)',
                        fill: 'currentcolor',
                        height: '24px',
                        width: '24px',
                        userSelect: 'none',
                        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                    }}
                    viewBox="0 0 24 24"
                >
                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                </svg>
                <div className={classes('di', 'bg-grey-800', 'robot', 'white-text')}>
                    {this.state.show && map(options, option =>
                        <div className={classes('pa2', 'pl3')}>{option}</div>
                    )}
                </div>
            </div>
        );
    },
});

export default equip(Filter);
