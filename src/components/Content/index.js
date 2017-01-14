import React from 'react';
import classes from 'classnames';
import Feed from 'src/components/Feed';
import equip from './equip';

const Content = ({ isFetching, posts, postCount, lastUpdated }) => (
    <div>
        {isFetching && posts.length === 0 &&
            <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
            <h2>Empty.</h2>
        }
        {postCount > 0 &&
            <div>
                {lastUpdated &&
                    <sub className={classes("pa3", "top-075", "grey-text")}>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                    </sub>
                }
                <Feed style={{ opacity: isFetching ? 0.5 : 1 }} />
            </div>
        }
    </div>
);

export default equip(Content);
