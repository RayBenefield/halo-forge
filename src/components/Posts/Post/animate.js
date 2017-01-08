/* eslint-disable react/no-find-dom-node,no-console */
import React from 'react';
import { findDOMNode } from 'react-dom';
import * as styles from './styles.css';

export default Component => React.createClass({
    getInitialState() {
        return { show: false };
    },
    componentWillLeave(cb) {
        findDOMNode(this).setAttribute('class', styles['remove-item']);
        setTimeout(cb, 500);
    },
    componentDidAppear() {
        findDOMNode(this).setAttribute('class', styles['new-item']);
        setTimeout(() => this.setState({ show: true }), 500);
    },
    componentDidEnter() {
        findDOMNode(this).setAttribute('class', styles['new-item']);
        setTimeout(() => this.setState({ show: true }), 500);
    },
    render() {
        return <Component {...this.state} {...this.props} />;
    },
});
