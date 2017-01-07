import React from 'react';
import { findDOMNode } from 'react-dom';
import * as styles from './styles.css';

export default Component => React.createClass({
    componentWillLeave(cb) {
        findDOMNode(this).setAttribute('class', styles['remove-item']);
        setTimeout(cb, 500);
    },
    render() {
        return <Component {...this.props} />;
    },
});
