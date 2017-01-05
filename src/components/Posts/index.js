import _ from 'underscore';
import React from 'react';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';
import Post from './Post';

const Posts = ({ style, posts, added }) => {
    let i = -1;
    const postCards = _.mapObject(posts, (post) => {
        const props = {
            post,
            style,
            added,
        };
        i++;
        return (
            <div key={i}>
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
