import React from 'react';
import classes from 'classnames';

const time = require('time-ago')();

export default ({ added, source, title }) => {
    const sourceImg = <img src={source.image} className={classes('pl2', 'v-mid')} alt={title} />;
    return (
        <div className={classes('h-1-5')}>
            <sub className={classes('grey-text', 'absolute', 'bottom-05', 'right-1')}>
                <a href={source.url}>
                    {time.ago(added)} • {source.name} {sourceImg}
                </a>
            </sub>
        </div>
    );
};
