import React from 'react';

export default ({ posts }) => (
    <ul>
        {posts.map((post, i) =>
            <li key={i}>{post.title}</li>
        )}
    </ul>
);
