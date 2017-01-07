import _ from 'underscore';
import React from 'react';
import ReactDOM from 'react-dom';
import equip from './equip';
import Post from './Post';

const Posts = ({ style, posts, added }) => {
    const removeChild = (child) => {
        // eslint-disable-next-line react/no-find-dom-node
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(child));
    };
    const postCards = _.map(posts, (post) => {
        const props = {
            post,
            style,
            added,
        };
        return (
            <Post key={post.id} remove={removeChild} {...props} />
        );
    });

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                overflowY: 'scroll',
                margin: '8px',
            }}
        >
            {_.values(postCards)}
        </div>
    );
};

export default equip(Posts);
