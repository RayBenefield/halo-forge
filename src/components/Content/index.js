import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Posts from '../Posts';
import equip from './equip';

const Content = ({ isFetching, posts, postCount, lastUpdated, muiTheme }) => (
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
                    <sub style={{ padding: '16px', color: muiTheme.card.subtitleColor }}>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                    </sub>
                }
                <Posts style={{ opacity: isFetching ? 0.5 : 1 }} />
            </div>
        }
    </div>
);

export default muiThemeable()(equip(Content));
