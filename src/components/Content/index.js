import React from 'react';
import Posts from '../Posts';
import equip from './equip';

const Content = ({ isFetching, posts }) => (
    <div>
        {isFetching && posts.length === 0 &&
            <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
            <h2>Empty.</h2>
        }
        {posts.length > 0 &&
            <Posts style={{ opacity: isFetching ? 0.5 : 1 }} />
        }
    </div>
);

export default equip(Content);
