import _ from 'underscore';
import React from 'react';
import classes from 'classnames';
import ReactTransitionGroup from 'react-addons-transition-group';
import Post from 'src/components/Post';
import NewsCard from 'src/components/Cards/news-card';
import equip from './equip';

const Feed = ({ style, posts, added }) => {
    const postCards = _.map(posts, (post) => {
        const props = {
            post,
            style,
            added,
        };
        return (
            <Post key={post.id}>
                <NewsCard {...props} />
            </Post>
        );
    });

    return (
        <ReactTransitionGroup className={classes("flex", "flex-column", "overflow-y-scroll", "pt2")}>
            {_.values(postCards)}
        </ReactTransitionGroup>
    );
};

export default equip(Feed);
