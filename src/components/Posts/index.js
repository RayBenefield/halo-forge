import _ from 'underscore';
import React from 'react';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';
import Post from './Post';

const Posts = ({ style, posts, added }) => {
    const postCards = _.mapObject(posts, (post, id) => {
        const props = {
            post,
            style,
            added,
        };
        return (
            <div key={id}>
                <Post {...props} />
            </div>
        );
    });

    return (
        <PostsGrid
            itemWidth={style.width}
            itemHeight={style.height}
            maxWidth={1600}
            items={_.values(postCards)}
        />
    );
};

export default equip(Posts);
