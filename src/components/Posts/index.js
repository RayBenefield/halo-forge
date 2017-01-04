import React from 'react';
import equip from './equip';
import PostsGrid from '../StaticResponsiveGrid';
import Post from './Post';

const Posts = ({ style, posts, added }) => {
    const postCards = posts.map((post, index) => {
        const props = {
            post,
            style,
            added,
        };
        return (
            <div key={index}>
                <Post {...props} />
            </div>
        );
    });

    return (
        <PostsGrid
            itemWidth={style.width}
            itemHeight={style.height}
            maxWidth={1600}
            items={postCards}
        />
    );
};

export default equip(Posts);
