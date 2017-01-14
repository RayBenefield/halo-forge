import React from 'react';
import classes from 'classnames';

const time = require('time-ago')();

export default ({ sourceUrl, added, source, sourceImage, title }) => {
    const sourceImg = <img src={sourceImage} className={classes("pl2", "v-mid")} alt={title} />;
    return (
        <div className={classes("h-1-5")}>
            <sub className={classes("grey-text", "absolute", "bottom-05", "right-1")}>
                <a href={sourceUrl}>
                    {time.ago(added)} • {source} {sourceImg}
                </a>
            </sub>
        </div>
    );
};
