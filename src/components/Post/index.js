import React from 'react';
import classes from 'classnames';
import animate from './animate';

const Post = ({ show, children }) => (
    <div className={classes("m-auto")}>
        {React.Children.map(
            children,
            child => React.cloneElement(child, { show })
        )}
    </div>
);

export default animate(Post);
