import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default ({ posts }) => (
    <div>
        {posts.map((post, i) => {
            const link = (<sub style={{ float: 'right' }}><a href={post.url}>/r/halo • 22 hours ago</a></sub>);
            const image = post.preview ? post.preview.images[0].resolutions[0].url.replace(/&amp;/g, '&') : 'http://lorempixel.com/108/81/';
            return (
                <Card key={i} style={{ width: '320px' }}>
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
