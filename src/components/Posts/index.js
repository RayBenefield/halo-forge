import _ from 'underscore';
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import equip from './equip';

const Posts = ({ style, posts }) => (
    <div>
        {posts.map((post, i) => {
            const link = (<sub style={{ float: 'right' }}><a href={post.url}>/r/halo • 22 hours ago</a></sub>);
            const image = post.preview
                ? (post.preview.images[0].resolutions.length > 0
                    ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&')
                    : 'http://lorempixel.com/108/81/'
                )
                : 'http://lorempixel.com/108/81/';
            return (
                <Card key={i} style={_.extend(style, { width: '400px', height: '120px' })}>
                    {link}
                    <img src={image} alt={post.title} height={81} width={101} style={{ float: 'left', padding: '8px' }} />
                    <CardHeader
                        title={post.title}
                        subtitle={post.author}
                        actAsExpander
                        showExpandableButton
                    />
                    <CardText actAsExpander expandable>
                        {post.selftext}
                    </CardText>
                </Card>
            );
        })}
    </div>
);

export default equip(Posts);
