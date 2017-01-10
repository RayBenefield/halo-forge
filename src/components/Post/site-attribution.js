import React from 'react';

const time = require('time-ago')();

export default ({ sourceUrl, added, source, sourceImage, title }) => {
    const sourceImg = <img src={sourceImage} className="pl2 v-mid" alt={title} />;
    return (
        <div className="h-1-5">
            <sub className="grey-text absolute bottom-05 right-1">
                <a href={sourceUrl}>
                    {time.ago(added)} • {source} {sourceImg}
                </a>
            </sub>
        </div>
    );
};
