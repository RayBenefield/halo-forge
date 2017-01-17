/* eslint-disable react/no-find-dom-node, import/no-duplicates */
import React from 'react';
import { findDOMNode } from 'react-dom';
import * as styles from './styles.css';

export default Component => React.createClass({
    getInitialState() {
        return { show: false };
    },
    componentWillLeave(cb) {
        const obj = findDOMNode(this);
        obj.setAttribute('class', `m-auto ${styles['remove-item']}`);
        setTimeout(cb, 500);
    },
    componentDidAppear() {
        const obj = findDOMNode(this);
        obj.setAttribute('class', `m-auto ${styles['new-item']}`);
        setTimeout(() => this.setState({ show: true }), 500);
    },
    componentDidEnter() {
        const obj = findDOMNode(this);
        obj.setAttribute('class', `m-auto ${styles['new-item']}`);
        setTimeout(() => this.setState({ show: true }), 500);
    },
    render() {
        return <Component {...this.state} {...this.props} />;
    },
});
